import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import {inject, Injectable} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError} from "rxjs";
import {urls} from "./constants";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";


@Injectable()
export class MainInterceptor implements HttpInterceptor{
  isRefreshing = false;
  waitRefreshListSubject = new BehaviorSubject<string>(null)
  constructor(private authService: AuthService, private matDialog: MatDialog, private router: Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const accessToken = this.authService.getAccessToken();
    if(accessToken) {
      req = this._addToken(req, accessToken)
    }
    return next.handle(req).pipe(
      catchError((res: HttpErrorResponse)=> {
        if(res && res.error && res.status===401){
          const refreshToken = this.authService.getRefreshToken();

          if(!this.isRefreshing && refreshToken){
            return this._handle401Error(req, next)
          }

          if(res.url === urls.auth.refresh) {
            this.isRefreshing = false;
            this.authService.deleteTokens();
            this.matDialog.closeAll();
            this.router.navigate(["auth", "login"], {queryParams: {sessionExpired: true}}).then()
            return throwError(() => res)
          }

          return this.waitRefreshListSubject.pipe(
            filter(token =>token!==null),
            take(1),
            switchMap(token => {
              return next.handle(this._addToken(req, token))
            })
          )
        }
      })
    );
  }

  _addToken (req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }

  private _handle401Error(req: HttpRequest<any>, next: HttpHandler): any {
    this.isRefreshing = true;
    return this.authService.refresh().pipe(
      switchMap(({access}) => {
        this.isRefreshing = false;
        this.waitRefreshListSubject.next(access)
        return next.handle(this._addToken(req, access))
      })
    )
  }
}






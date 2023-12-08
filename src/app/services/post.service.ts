import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAll(userId: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.post.postsByUserId(userId));
  }

  getById(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(urls.post.postById(id));
  }
}

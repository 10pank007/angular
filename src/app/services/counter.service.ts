import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject<number>(0);

  constructor() { }
  inc(): void {
    this.counter.next(this.counter.value + 1);
  }
  dec(): void {
    this.counter.next(this.counter.value - 1);
  }
  reset(): void {
    this.counter.next(0)
  }
  getCount(): Observable<number> {
    return this.counter.asObservable();
  }
}

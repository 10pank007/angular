import { Component } from '@angular/core';
import {CounterService} from "../../services/counter.service";

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

  constructor(private counterService: CounterService) {
  }

  inc():void {
    this.counterService.counter.next(this.counterService.counter.value + 1);
  }

  dec(): void {
    this.counterService.counter.next(this.counterService.counter.value - 1);
  }

  reset(): void {
    this.counterService.counter.next(0);
  }
}

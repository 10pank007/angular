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
    this.counterService.inc();
  }

  dec(): void {
    this.counterService.dec()
  }

  reset(): void {
    this.counterService.reset()
  }
}

import {Component, Input} from '@angular/core';
import {ICar} from "../../../../interfaces";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent{
  @Input() cars: ICar[]

}

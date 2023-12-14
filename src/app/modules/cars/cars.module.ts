import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';


@NgModule({
  declarations: [
    CarsPageComponent,
    CarFormComponent,
    CarsComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }

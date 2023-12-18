import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarsComponent } from './components/cars/cars.component';

import {MatExpansionModule} from "@angular/material/expansion";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { CarComponent } from './components/car/car.component';


@NgModule({
  declarations: [
    CarsPageComponent,
    CarFormComponent,
    CarsComponent,
    CarComponent,

  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatExpansionModule,
    MatPaginatorModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }

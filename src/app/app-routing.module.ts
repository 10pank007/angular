import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutsComponent} from "./layouts/main-layouts/main-layouts.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutsComponent, children: [
      {path: '', redirectTo: "cars", pathMatch: 'full'},
      {path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(m => m.CarsModule)},
      {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {UsersDetailsPageComponent} from "./pages/users-details-page/users-details-page.component";

const routes: Routes = [
  {path: '', component: UsersPageComponent, children: [
      {path: ":id", component: UsersDetailsPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import {UserService} from "./services";
import {HttpClientModule} from "@angular/common/http";
import { UsersDetailsPageComponent } from './pages/users-details-page/users-details-page.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    UsersPageComponent,
    UsersDetailsPageComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ]
})
export class UsersModule { }

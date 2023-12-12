import { Component } from '@angular/core';
import {UserService} from "../../modules/users/services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // constructor(private userService: UserService) {
  //   this.userService.getAll().subscribe(value => console.log(value))
  // }

}

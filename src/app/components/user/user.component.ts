import {Component, Input} from '@angular/core';
import {IUser} from "../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user: IUser

  constructor(private router: Router) {
  }
  toDetails(): void {
    this.router.navigate(["user", this.user.id], {state: this.user})
  }
}

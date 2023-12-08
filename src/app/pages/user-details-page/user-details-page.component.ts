import { Component } from '@angular/core';
import {UserDetailsComponent} from "../../components/user-details-compon/user-details.component";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {IUser} from "../../interfaces";
import {state} from "@angular/animations";

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [
    UserDetailsComponent,
    RouterOutlet
  ],
  templateUrl: './user-details-page.component.html',
  styleUrl: './user-details-page.component.css'
})
export class UserDetailsPageComponent {
  id: string

  constructor(private router:Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => this.id = id)
  }

  // "user", this.id,
  goToPosts() {
    this.router.navigate(["posts"], {relativeTo: this.activatedRoute, state: {id: this.id}})
  }
}

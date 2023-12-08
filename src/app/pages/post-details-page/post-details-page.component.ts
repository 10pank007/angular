import { Component } from '@angular/core';
import {PostDetailsComponent} from "../../components/post-details/post-details.component";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-post-details-page',
  standalone: true,
  imports: [
    PostDetailsComponent,
    RouterOutlet
  ],
  templateUrl: './post-details-page.component.html',
  styleUrl: './post-details-page.component.css'
})
export class PostDetailsPageComponent {
  id: string


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id})=> this.id = id);
  }

  goToComments(): void {
    this.router.navigate(["comments"], {relativeTo: this.activatedRoute, state: {id: this.id}})
  }
}

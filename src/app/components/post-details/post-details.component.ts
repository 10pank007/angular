import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {
  post: IPost

  constructor(private router: Router, private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.post = this.router.getCurrentNavigation()?.extras.state as IPost;

      if(!this.post) {
        postService.getById(id).subscribe(value => this.post = value)
      }

    });


  }
  ngOnInit(): void {

  }

}

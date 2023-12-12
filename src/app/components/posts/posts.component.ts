import {Component, OnInit} from '@angular/core';
import {PostComponent} from "../post/post.component";
import {PostService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../interfaces";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: IPost[]

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.parent?.params.subscribe(({id}) => {
      this.postService.getAll(id).subscribe(value => this.posts = value);
    })

  }
  ngOnInit(): void {

  }

}

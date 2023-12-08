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
  id: {id: string}
  posts: IPost[]

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
    console.log(value)})
    this.id = router.getCurrentNavigation()?.extras.state as any;
    console.log(this.id.id)
  }
  ngOnInit(): void {
    this.postService.getAll(+this.id.id).subscribe(value => this.posts = value)
    console.log(this.posts, this.id)
  }

}

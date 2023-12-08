import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services";
import {IComment} from "../../interfaces";
import {PostComponent} from "../post/post.component";
import {NgForOf, NgIf} from "@angular/common";
import {CommentComponent} from "../comment/comment.component";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf,
    CommentComponent,
    NgIf
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{
  id: {id: string};
  comments: IComment []
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(value => console.log(value));
    this.id = this.router.getCurrentNavigation()?.extras.state as any;
    console.log(this.id)
  }

  ngOnInit(): void {
    this.commentService.getAllByPostId(+this.id.id).subscribe(value => this.comments = value);
    console.log(this.comments)
  }

}

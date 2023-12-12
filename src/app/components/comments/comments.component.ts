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
  comments: IComment []
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private commentService: CommentService) {
    this.activatedRoute.parent?.params.subscribe(({id}) => {
      this.commentService.getAllByPostId(id).subscribe(value => this.comments = value);
    });


  }

  ngOnInit(): void {

  }

}

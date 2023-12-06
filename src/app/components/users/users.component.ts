import {Component, OnInit} from '@angular/core';
import {PostService, UserService} from "../../services";
import {IPost, IUser} from "../../interfaces";
import {NgForOf} from "@angular/common";
import {UserComponent} from "../user/user.component";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    UserComponent,
    PostComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: IUser[]
  postDetails: IPost[]
  constructor(private userService: UserService, private postService: PostService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getPosts(postId: number) {
    this.postService.getPostById(postId).subscribe(value => this.postDetails = value)
  }
}

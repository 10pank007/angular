import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts";
import {PostsPageComponent, UsersPageComponent} from "./pages";
import {UserDetailsPageComponent} from "./pages";
import {PostDetailsPageComponent} from "./pages";
import {CommentsComponent} from "./components/comments/comments.component";

export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: "users", pathMatch: "full"},
      {path: 'users', component: UsersPageComponent},
      {path: "user/:id", component: UserDetailsPageComponent, children: [
          {path: "posts", component: PostsPageComponent}
        ]},
      {path: "post/:id", component: PostDetailsPageComponent, children: [
          {path: "comments", component: CommentsComponent}
        ]}
    ]
  }
];

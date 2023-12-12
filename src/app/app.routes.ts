import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts";
import {PostsPageComponent, UsersPageComponent} from "./pages";
import {UserDetailsPageComponent} from "./pages";
import {PostDetailsPageComponent} from "./pages";
import {CommentsComponent} from "./components/comments/comments.component";
import {resolve} from "@angular/compiler-cli";
import {userDetailsResolver} from "./services/resolvers/user-details.resolver";

export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: "users", pathMatch: "full"},
      {path: 'users', component: UsersPageComponent},
      {path: "user/:id",resolve: {userData: userDetailsResolver}, component: UserDetailsPageComponent, children: [
          {path: "posts", component: PostsPageComponent}
        ]},
      {path: "post/:id", component: PostDetailsPageComponent, children: [
          {path: "comments", component: CommentsComponent}
        ]}
    ]
  }
];

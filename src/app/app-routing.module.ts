import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './fruits/home/home.component';
import { CreateComponent } from './fruits/create/create.component';
import { EditComponent } from './fruits/edit/edit.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts/home', pathMatch: 'full' },
  { path: 'fruits/home', component: HomeComponent },
  { path: 'fruits/create', component: CreateComponent},
  { path: 'fruits/edit/:id', component: EditComponent},
  { path: 'posts/home', component: PostListComponent},
  { path: 'posts/create', component: PostCreateComponent},
  { path: 'posts/edit/:id', component: PostEditComponent},
  { path: 'posts/details/:id', component: PostDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './fruits/home/home.component';
import { CreateComponent } from './fruits/create/create.component';
import { EditComponent } from './fruits/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostListComponent } from './posts/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    PostCreateComponent,
    PostEditComponent,
    PostDetailsComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

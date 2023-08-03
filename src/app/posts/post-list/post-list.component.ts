import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private postService:PostService){}

  ngOnInit(): void{
    this.postService.getAll().subscribe((data) => {
      this.posts = data
    })
  }

  delete(id: number){
    this.postService.delete(id).subscribe(
      (data) => {
        this.posts = this.posts.filter(o => o.id != id); //refresh the posts and filter for undeleted records
      }
    )
  }
}

import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent {

  postObject: Post = {
    id: 0,
    title: '',
    body: ''
  }

  constructor(private postService : PostService, private router : Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getPostById(id);
    })
  }

  //get by id and set to this object
  getPostById(id: number){
    this.postService.getById(id).subscribe((data) => {
      this.postObject = data;
    })
  }

  update(){
    return this.postService.update(this.postObject.id, this.postObject).subscribe({
      next: (data) => {
        this.router.navigate(["/posts/home"])
      },
      error: (err) => {
        console.log(err);
      }

    })
  }



}

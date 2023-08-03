import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  postObject: Post = {
    id: 0,
    title: '',
    body: ''
  }

  constructor(private postService : PostService, private router : Router, private route : ActivatedRoute){}

  ngOnInit() : void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getPostById(id);
    })
  }

  getPostById(id : number){
    this.postService.getById(id).subscribe((data) => {
      this.postObject = data;
    })
  }
}

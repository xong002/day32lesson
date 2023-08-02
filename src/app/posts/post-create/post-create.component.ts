import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  postForm: FormGroup

  constructor(private fb: FormBuilder, private postService: PostService, private router:Router){}

  ngOnInit(){
    this.initializeForm();
  }

  initializeForm(){
    this.postForm = this.fb.group({
      title: new FormControl(''),
      body: new FormControl(''),
    })
    // per lecture slides
    // this.postForm = this.fb.group({
    //   title: this.fb.control<string>(''),
    //   body: this.fb.control<string>('')
    // })
  }

  createPost(){
    this.postService.create(this.postForm.value).subscribe((response:any) => {
      this.router.navigateByUrl('/posts/home');
    })
    console.log(this.postForm.controls)
  }
}

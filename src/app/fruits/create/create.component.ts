import { Component } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  //=================== static form ============================
/*   fruitObject: Fruits = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0,
  };

  constructor(private fruitService: FruitsService, private router: Router) { } //Router to dynamically navigate using code passed-in instead of hardcoding

  create() {
    this.fruitService.create('fruits', this.fruitObject).subscribe(
      {
        next: (data) => {
          this.router.navigate(["/fruits/home"]);
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  } */

  //=================== reactive form ============================
  fruitForm : FormGroup

  constructor(private formBuilder : FormBuilder, private fruitsService : FruitsService, private router : Router){}

  ngOnInit(){
    this.initialiseForm();
  }

  initialiseForm(){
    this.fruitForm = this.formBuilder.group({
      name : new FormControl('',[Validators.required]),
      quantity: new FormControl<number>(0, [Validators.required]),
      price: new FormControl<number>(0, [Validators.required])
    })
  }
  
  createFruit(){
    this.fruitsService.create("fruits", this.fruitForm.value).subscribe((response: any) => {
      this.router.navigateByUrl("/fruits/home");
    })
  }

}

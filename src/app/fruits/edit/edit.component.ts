import { Component } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  fruitObject: Fruits = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0
  }

  constructor (private fruitService: FruitsService, private router: Router, private route:ActivatedRoute){}

  ngOnInit(): void{
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getFruitById(id);
    })
  }

  getFruitById(id: number){
    this.fruitService.getById('fruits',id).subscribe((data)=> {
      this.fruitObject = data;
    })
  }

  update(){
    return this.fruitService.update('fruits', this.fruitObject).subscribe({
      next: (data) => {
        this.router.navigate(['/fruits/home'])
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}

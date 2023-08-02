import { Component } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   allFruits: Fruits[]=[];
   
   constructor(private fruitService: FruitsService){}

   ngOnInit(){
    this.fruitService.getAll('fruits').subscribe((data) => {
      this.allFruits = data;
    })
   }
}

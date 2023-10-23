import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrls: ['./allorder.component.css']
})
export class AllorderComponent {
constructor(private _CartService:CartService){}

myAllOrder(){
this._CartService.allOrder().subscribe({
  next:(res)=>{
    console.log('order' , res);
    
  }
})
}

}

import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
cartId:string='';
  shoppingForm = new FormGroup({
    details: new FormControl(null ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    phone: new FormControl(null,[Validators.required,Validators.pattern('01[0125][0-9]{8}')]),
    city: new FormControl(null),
  })
constructor(private _CartService:CartService , private _ActivatedRoute:ActivatedRoute){
  
  this.cartId=this._ActivatedRoute.snapshot.params['cartId'];
console.log(this.cartId)
}
  payment(data:FormGroup){
    this._CartService.onlinePayMent(this.cartId,data.value).subscribe({
      next:(res)=>{
        console.log(res.session.url);
        window.location.href=res.session.url;
        
      }
    })
  }
}

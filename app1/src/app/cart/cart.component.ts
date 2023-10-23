import { Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _CartService:CartService,private _toastr: ToastrService , private _Renderer2:Renderer2){}
  cartData:any=null;
  ngOnInit(): void {
    this.getMyCart()

  }
getMyCart(){
  this._CartService.getLogedCart().subscribe({
    next:(res)=>{console.log(res);
      this.cartData=res.data;
    }
  })
}
deleteItem(id:string){
  this._CartService.deleteItem(id).subscribe({
    next:(res)=>{
      console.log(res);
      this._CartService.cartNum.next(res.numOfCartItems)
      
    },error:()=>{

    },complete:()=>{
      this.getMyCart();
    }
  })
}
updateMyCart(id:string , count:number , el1:HTMLButtonElement , el2:HTMLButtonElement){

  if(count >= 1){
    this._Renderer2.setAttribute(el1 , 'disabled' , 'true');
    this._Renderer2.setAttribute(el2 , 'disabled' , 'true');

    this._CartService.updateItem(id,count).subscribe({
      next:(res)=>{
        console.log(res);
        this._Renderer2.removeAttribute(el1 , 'disabled' );
        this._Renderer2.removeAttribute(el2 , 'disabled' );
    
        
      },error:(err)=>{
        this._Renderer2.removeAttribute(el1 , 'disabled' );
        this._Renderer2.removeAttribute(el2 , 'disabled' );
      },complete:()=>{
        this.getMyCart();
      }
    })
  }
}



clear():void{
this._CartService.clearCart().subscribe({
  next:(res)=>{
    console.log(res);
    if(res.message === "success"){
this.cartData = null;
this._CartService.cartNum.next(0)
    }
    
  }
})
}

}

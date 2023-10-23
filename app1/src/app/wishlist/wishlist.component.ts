import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { Product } from '../product';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  // productsList:Product[]=[];
  cartData:any=null;
  da:any;
  wishListData:string[] = [];
constructor(private _WishlistService:WishlistService , private _ToastrService:ToastrService , private _CartService:CartService){}

ngOnInit(): void {
 this._WishlistService.getWishList().subscribe({
  next:(res)=>{
    console.log("Response", res.data);
    this.cartData=res.data;
  }
 })

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
      
    }
  })
}

addMyCart(id:string){
  this._CartService.addToCart(id).subscribe({
    next:(res)=>{console.log(res);
      this.da=res;
      this._CartService.cartNum.next(this.da.numOfCartItems)
    },error:()=>{
      this._ToastrService.error('','It has been successfully added ',{
        closeButton:true,
        progressBar:true
      });
    },complete:()=>{
      this._ToastrService.success('Nice','It has been successfully added ',{
        closeButton:true,
        progressBar:true
      });
    }
  })
}

wishFav(prodId:string){
  this._WishlistService.addToWishList(prodId).subscribe({
    next:(res)=>{
      console.log(res);
      this._ToastrService.success(res.message);
      this.wishListData = res;

    }
  })
}

removeFav(removeId:string | undefined){
  this._WishlistService.removeWishList(removeId).subscribe({
    next:(res)=>{
      console.log(res);
      this._ToastrService.success(res.message)
      this.wishListData = res;
      
      this._WishlistService.getWishList().subscribe({
        next:(res)=>{
          console.log("Response", res.data);
          this.cartData=res.data;
        }
       })
      
    }
  });
}
}

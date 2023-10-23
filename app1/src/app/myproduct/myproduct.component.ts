import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../product';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.css']
})
export class MyproductComponent implements OnInit {
  productsList:Product[]=[];
  term:string='';
  da:any;
constructor(private _ProductsService:ProductsService , private _CartService:CartService , private _ToastrService:ToastrService , private _WishlistService:WishlistService){}


  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        // console.log(res.data);
  this.productsList=res.data;
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
        this._ToastrService.success(res.message)
      }
    })
  }
  
}

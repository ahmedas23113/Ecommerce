import { WishlistService } from './../wishlist.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detils',
  templateUrl: './product-detils.component.html',
  styleUrls: ['./product-detils.component.css']
})
export class ProductDetilsComponent {
  productId:string='';
  productData:any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  da: any;


  constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute , private _CartService:CartService , private _ToastrService:ToastrService , private _WishlistService:WishlistService){
    this.productId=_ActivatedRoute.snapshot.params['id '];
    // console.log(_ActivatedRoute.snapshot.params['id ']);
   this.getProduct();
  }
  getProduct(){
    this._ProductsService.getProductById(this.productId).subscribe({
      next:(res:any)=>{
        console.log(this.productData);
        this.productData=res.data;
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

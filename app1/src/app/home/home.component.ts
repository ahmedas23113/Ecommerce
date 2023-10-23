import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
productsList:Product[]=[];
categories:Category[] = [];
term:string='';
da:any;
checked:boolean=true;
constructor(private _ProductsService:ProductsService,private _CartService:CartService,private _ToastrService:ToastrService , private _WishlistService:WishlistService){}
ngOnInit(){
  this.getProducts();
  this._ProductsService.getCategories().subscribe({
    next:(res)=>{
      console.log('categories',res.data);
      this.categories=res.data;
      
    }
  })
}
getProducts(){
  this._ProductsService.getAllProducts().subscribe({
    next:(res)=>{
      // console.log(res.data);
this.productsList=res.data;
    }
  })
}
// .numOfCartItems
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
mainSlideOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 3
    },
    740: {
      items: 4
    },
    940: {
      items: 6
    }
  },
  nav: true
}
categoryOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 3
    },
    740: {
      items: 4
    },
    940: {
      items: 6
    }
  },
  nav: true
}
}

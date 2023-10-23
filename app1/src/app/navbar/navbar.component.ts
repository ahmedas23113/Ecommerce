import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CartService } from '../cart.service';
Router
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogedIn:boolean=false;
  cartNumber:number=0;
  constructor(private _UsersService:UsersService , private _Router:Router , private _CartService:CartService ){
_UsersService.userData.subscribe({
  next:()=>{

    if(_UsersService.userData.getValue()!==null){
this.isLogedIn= true;
    }else{
      this.isLogedIn= false;

    }
  }
})
  }
  ngOnInit(): void {
    this._CartService.cartNum.subscribe({
      next:( data )=>{
       this.cartNumber=data;
        
      }
    })

    this._CartService.getLogedCart().subscribe({
      next:(res)=>{
        console.log('nav',res);
        this.cartNumber=res.numOfCartItems;
        
      }
    })
  }


  signOut():void{
localStorage.removeItem('userToken');
this._Router.navigate(['/login'])
  }

}

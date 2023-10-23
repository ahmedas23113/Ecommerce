import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
Router
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private _UsersService:UsersService ,private _Router:Router){}
errorMessage:string='';
isLoud:boolean=false;
loginForm = new FormGroup({
  email : new FormControl(null,[Validators.email,Validators.required]),
  password : new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
});

sendData(data:FormGroup){
this.isLoud=true;
this._UsersService.login(data.value).subscribe({
  next:(res:any) =>{console.log(res);
    if(res.message== 'success'){
      localStorage.setItem('userToken', res.token);
      this._UsersService.decodeUserToken();
      this._Router.navigate(['/home'])
    }
  },
  error :(err)=>{
    this.isLoud=false;
    this.errorMessage=err.error.errors;
  },
  complete:()=>{
    this.isLoud=false;
    console.log('done');

  }

})
}

}

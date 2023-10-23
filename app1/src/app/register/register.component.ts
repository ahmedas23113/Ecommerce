import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup , Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

errorMessage:string='';
isLoud:boolean=false;
registerForm = new FormGroup({
  name : new FormControl(null ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  email : new FormControl(null,[Validators.email,Validators.required]),
  password : new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
  rePassword: new FormControl(null),
  phone: new FormControl(null,[Validators.required,Validators.pattern('01[0125][0-9]{8}')]),
}
, {validators:[this.confirmPassword] }as FormControlOptions
);

confirmPassword(group:FormGroup):void{
  const password=group.get('password');
  const rePassword=group.get('rePassword');

  if(rePassword?.value == ''){
    rePassword?.setErrors({required:true})

  }else if(password?.value != rePassword?.value){
    rePassword?.setErrors({mismatch:true})
  }
}
constructor(private _UsersService:UsersService , private _Router:Router){}

sendData(data:FormGroup){
this.isLoud=true;
this._UsersService.register(data.value).subscribe({
  next:(res:any) =>{console.log(res);
if(res.token){
  this._Router.navigate(['/login'])
}
  },
  error :(err)=>{
    this.isLoud=false;
    this.errorMessage=err.error.errors.msg ;
  },
  complete:()=>{
    this.isLoud=false;
    console.log('done');
  }
})
}
}

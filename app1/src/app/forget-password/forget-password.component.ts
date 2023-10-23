import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetService } from '../forget.service';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
constructor(private _ForgetService:ForgetService , private _Router:Router){}
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  Email:string='';
  userMsg:string='';
  userTrueMsg:string='';

  forgetForm: FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.email,Validators.required])
  })


  resetCodeForm: FormGroup = new FormGroup({
    resetCode : new FormControl('')
  })

newPassword: FormGroup = new FormGroup({
    newPassword : new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
  })

  forgetPassword():void{
    let userEmail = this.forgetForm.value;
    this.Email = userEmail.email;
this._ForgetService.forgetPassword(userEmail).subscribe({
  next:(res)=>{
    console.log(res);
this.userTrueMsg = res.message;
this.step1 = false;
this.step2 = true;
  },error:(err)=>{
    this.userMsg=err.error.message;
  }
})
  }


  restCode():void{
    let resetCode =this.resetCodeForm.value;
    this._ForgetService.restCode(resetCode).subscribe({
      next:(res)=>{
        console.log(res);
        this.step2 = false;
this.step3 = true;
        this.userTrueMsg = res.message;
      },error:(err)=>{
        this.userMsg=err.error.message;
      }
    })
  }
  newRePassword():void{
    let restPass= this.newPassword.value;
    restPass.email=this.Email;
this._ForgetService.restPassword(restPass).subscribe({
  next:(res)=>{
    console.log(res);
    this.userTrueMsg = res.message;
if(res.token){
  localStorage.setItem("userToken",res.token);
  this._Router.navigate(['/home'])
}
  },error:(err)=>{
    this.userMsg=err.error.message;
  }
})
  }
}

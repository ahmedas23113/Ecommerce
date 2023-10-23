import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {
baseUrl:string= 'https://ecommerce.routemisr.com/api/v1/auth/';
  constructor(private _HttpClient:HttpClient) {

   }

   forgetPassword(userEmail:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + 'forgotPasswords',userEmail)
   }

   restCode(restForm:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + 'verifyResetCode',restForm)
   }
   restPassword(restPassForm:object):Observable<any>{
   
    return this._HttpClient.put(this.baseUrl + 'resetPassword',restPassForm)
   }
}

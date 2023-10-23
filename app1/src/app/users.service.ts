import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userData = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('userToken')!==null){
this.decodeUserToken();
    }
  }

  decodeUserToken(){
    let encoded:string =JSON.stringify(localStorage.getItem('userToken'));
    let decoded:any = jwtDecode(encoded);
    console.log(decoded);
    this.userData.next(decoded);
  }
register(date:FormGroup):Observable<any>{
 return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', date)
}
login(date:FormGroup):Observable<any>{
 return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', date)
}
}

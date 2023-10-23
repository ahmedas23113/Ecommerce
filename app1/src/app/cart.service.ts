import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartNum:BehaviorSubject<number> = new BehaviorSubject(0);
pathUrl:string='https://ecommerce.routemisr.com/api/v1/';

  constructor(private _HttpClient:HttpClient) {}
  addToCart(id:string){
    return this._HttpClient.post(`${this.pathUrl}cart`,{productId:id});
  }

  getLogedCart():Observable<any>{
return this._HttpClient.get(`${this.pathUrl}cart`)
  }

  deleteItem(id:string):Observable<any>{
return this._HttpClient.delete(`${this.pathUrl}cart/${id}`)
  }
  updateItem(id:string , count:number):Observable<any>{
return this._HttpClient.put(`${this.pathUrl}cart/${id}`,{count:count})
  }
  onlinePayMent(cartId:string , data:FormGroup ):Observable<any>{
return this._HttpClient.post(`${this.pathUrl}orders/checkout-session/${cartId}?url=http://localhost:4200`,
{shippingAddress:data})
  }

  clearCart():Observable<any>{
    return this._HttpClient.delete(`${this.pathUrl}cart`)
      }

      allOrder():Observable<any>{
        return this._HttpClient.get(`${this.pathUrl}orders/`);
      }
}

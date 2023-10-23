import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/`;
  constructor(private _HttpClient:HttpClient) { }

  addToWishList(prodId:string):Observable <any>{
    return this._HttpClient.post(this.baseUrl + `wishlist`,
    {
      productId: prodId
    });
  }

  getWishList():Observable <any>{
    return this._HttpClient.get(this.baseUrl + `wishlist`);
  }

  removeWishList(removeId:string | undefined):Observable <any>{
    return this._HttpClient.delete(this.baseUrl + `wishlist/${removeId}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
constructor(private _ProductsService:ProductsService){}
brandData:any[]=[];
ngOnInit(): void {
  this._ProductsService.getBrand().subscribe((res)=>{
    console.log('brand data : ', res.data);
  this.brandData = res.data;
  })
}
}

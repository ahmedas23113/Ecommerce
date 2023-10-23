import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
constructor(private _ProductsService:ProductsService){}
categoryData:Category[]=[];
ngOnInit(): void {
  this._ProductsService.getCategories().subscribe((res)=>{
console.log('cat',res.data);
this.categoryData=res.data;

  })
}

}

import { Product } from './product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list:Product[],x: string): Product[] {
    return list.filter((i)=>i.title.toLowerCase().includes(x.toLowerCase()));
  }

}

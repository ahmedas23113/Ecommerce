import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(tittle:string , limit?:number): string {
    return tittle.split(' ').slice(0,limit).join(' ');
  }

}

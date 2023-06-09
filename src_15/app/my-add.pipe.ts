import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(No1: number, No2: number) : number{
    return No1 + No2;
  }

}

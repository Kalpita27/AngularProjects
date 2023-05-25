import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, Param : string): string {
    if(Param == 'Prime'){
      if(this.Prime(value))
    {
      return value + 'is a prime number';
    }
    else{
      return value + 'is not a prime number';
    }
    }

    if (Param === 'Even') {
      if (value % 2 === 0) {
        return value + 'is a Even number';
      } else {
        return value + 'is odd number';
      }
    }

    return 'Invalid parameter';
  }

  private Prime(value: number): string {
    if (value <= 1) {
      return value + 'is a Prime number';
    }
    for (let i = 2; i <= value/2; i++) {
      if (value % i == 0) {
        return value + 'is a not Prime number';;
      }
    }
    return value + 'is a Prime number';
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  ChkPrime(No: number): boolean
  {
    if (No <= 1) {
      return false;
    }
    for (let i = 2; i <= No/2; i++) {
      if (No % i == 0) {
        return false;
      }
    }
    return true;
  
  }
}

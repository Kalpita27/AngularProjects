import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  constructor(public numberService: NumberService) { }

  ChkPrime(No: number): boolean{
    return this.numberService.ChkPrime(No);
  }
}

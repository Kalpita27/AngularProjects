import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
    add: number
    sub:number

    constructor(private arithmeticService: ArithmeticService) {
      this.add = this.arithmeticService.add(10, 11);
      this.sub = this.arithmeticService.sub(11, 10);
    }
}

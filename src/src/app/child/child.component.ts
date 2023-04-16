import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit 
{
   // Add input decorator as it will receve the data from parent
   @Input() public parentData: any;
   constructor() { }
 
   ngOnInit() {
   }
 
  }


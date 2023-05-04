import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(public eobj : ElementRef) {
   
   }

   @HostListener('mouseenter')onmouseenter()
   {
    this.eobj.nativeElement.style.backgraound = 'blue'
   }

   @HostListener('mouseleave')onmouseleave()
   {
    this.eobj.nativeElement.style.backgraound = 'red'
   }

}

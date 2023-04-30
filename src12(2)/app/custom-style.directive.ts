import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private ele:ElementRef) 
  {
    //ele.nativeElement.style.background='yellow'
  }

  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('Yellow');
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('white');
  }

  setcolor(color:string)
  {
    this.ele.nativeElement.style.background=color;
  }

}

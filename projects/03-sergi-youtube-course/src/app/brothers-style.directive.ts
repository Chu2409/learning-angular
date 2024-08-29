import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBrothersStyle]'
})
export class BrothersStyleDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'lightblue'
  }

}

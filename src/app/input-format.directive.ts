import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[goToNextInput]'
})
export class InputFormatDirective {
  @Input('attr.next-element') nextElement;
  @Input('maxlength') maxlength;

  constructor(private el: ElementRef) { }
  
  @HostListener('keyup') onKeyup () {
    if (this.el.nativeElement.value.length == parseInt(this.maxlength))
      this.nextElement.focus();
  }

}

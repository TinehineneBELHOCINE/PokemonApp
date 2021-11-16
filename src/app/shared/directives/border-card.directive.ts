import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPkmBorderCard]'
})
export class BorderCardDirective {
@Input('appPkmBorderCard') borderColor: string = '';
GREY_COLOR='#f5f5p5';
RED_COLOR='#FF0000';
GREEN_COLOR='#009688';

  constructor(private element: ElementRef) {
    this.setBorder(this.RED_COLOR);
    this.setHeight(180);
  }
  private setBorder(color: string): void {
    const border = 'solid 4px ' + color;
    this.element.nativeElement.style.border = border;
  }
  private setHeight(height: number): void {
    this.element.nativeElement.style.height = height + ' px';
  }
  @HostListener('mouseenter') onMouseEnter(){
    const color = this.borderColor != '' ? this.borderColor : null;
    console.log('<,,,,,,,,,,,,,,,, ', color);
    this.setBorder(this.borderColor || this.GREEN_COLOR);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.RED_COLOR);
  }
}

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[strongTextDirective]',
  standalone: true
})
export class StrongTextHoverEffectDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.8');
   }
}
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[headerHoverEffect]',
  standalone: true
})
export class HeaderHoverEffectDirective {

  private highlightColor: string = "rgb(225, 225, 224)"

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.2s');
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
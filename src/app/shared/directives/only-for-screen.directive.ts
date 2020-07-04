import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[peOnlyForScreen]'
})
export class OnlyForScreenDirective implements OnInit {

  @Input() public readonly mode: string;

  constructor(
    public el: ElementRef,
    private readonly renderer: Renderer2,
    private readonly breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
      this.breakpointObserver.observe(
        [this.mode]
      ).subscribe(results => {
        if (results.matches) {
          this.renderer.addClass(this.el.nativeElement, 'show');
          this.renderer.removeClass(this.el.nativeElement, 'hide');
        } else {
          this.renderer.addClass(this.el.nativeElement, 'hide');
          this.renderer.removeClass(this.el.nativeElement, 'show');
        }
      });
  }
}

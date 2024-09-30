import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core'

@Directive({
  selector: '[appScrollFadeUp]',
  standalone: true
})
export class ScrollFadeUpDirective implements AfterViewInit {
  private hasAnimated = false

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.renderer.addClass(this.el.nativeElement, '.fade-up')
          this.hasAnimated = true
        }
      })
    })

    observer.observe(this.el.nativeElement)
  }
}

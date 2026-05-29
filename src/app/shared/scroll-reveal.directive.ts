import { Directive, ElementRef, NgZone, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly zone = inject(NgZone);
  private observer?: IntersectionObserver;
  private lastScrollY = 0;

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    this.lastScrollY = window.scrollY;
    this.renderer.addClass(element, 'app-scroll-reveal');

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          const scrollingUp = window.scrollY < this.lastScrollY;
          this.lastScrollY = window.scrollY;

          if (entry.isIntersecting) {
            this.show(element);
            return;
          }

          if (scrollingUp) {
            this.hideToLeft(element);
          }
        },
        { rootMargin: '-12% 0px -18% 0px', threshold: 0.16 }
      );

      this.observer.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private show(element: HTMLElement): void {
    this.renderer.removeClass(element, 'is-exiting-up');
    this.renderer.addClass(element, 'is-visible');
  }

  private hideToLeft(element: HTMLElement): void {
    this.renderer.removeClass(element, 'is-visible');
    this.renderer.addClass(element, 'is-exiting-up');
  }
}

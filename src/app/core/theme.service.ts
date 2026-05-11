import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly dark = signal(localStorage.getItem('theme') === 'dark');

  init(): void {
    this.apply(this.dark());
  }

  toggle(): void {
    this.dark.update((value) => {
      const next = !value;
      this.apply(next);
      return next;
    });
  }

  private apply(dark: boolean): void {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }
}

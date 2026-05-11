import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  template: `
    <app-hero />
  `
})
export class HomeComponent {}

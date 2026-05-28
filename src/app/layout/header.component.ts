import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { I18nService } from '../core/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly i18n = inject(I18nService);
  isMenuOpen = false;

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

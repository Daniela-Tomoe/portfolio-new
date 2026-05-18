import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, TagModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  goTo(path: string): void {
    this.router.navigateByUrl(path);
  }
}

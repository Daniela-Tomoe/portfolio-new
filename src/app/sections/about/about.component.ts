import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  readonly i18n = inject(I18nService);
  readonly paragraphKeys = ['about.paragraph1', 'about.paragraph2', 'about.paragraph3', 'about.paragraph4'];
}

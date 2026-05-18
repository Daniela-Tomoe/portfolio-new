import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  readonly i18n = inject(I18nService);
}

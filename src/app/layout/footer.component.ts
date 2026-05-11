import { Component, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
      {{ i18n.t('footer.text') }}
    </footer>
  `
})
export class FooterComponent {
  readonly i18n = inject(I18nService);
}

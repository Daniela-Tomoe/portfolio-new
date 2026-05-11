import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardModule],
  template: `
    <section id="about" class="bg-slate-50 py-20 dark:bg-zinc-900">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="animate-page-in text-3xl font-black text-slate-950 dark:text-white">{{ i18n.t('about.title') }}</h2>
        <p class="mt-4 max-w-3xl text-lg leading-8 text-slate-600 animate-page-in [animation-delay:70ms] dark:text-zinc-300">{{ i18n.t('about.text') }}</p>
        <div class="mt-10 grid gap-5 md:grid-cols-2">
          <p-card [header]="i18n.t('about.card1.title')">
            <p class="m-0 text-slate-600 dark:text-zinc-300">{{ i18n.t('about.card1.text') }}</p>
          </p-card>
          <p-card [header]="i18n.t('about.card2.title')">
            <p class="m-0 text-slate-600 dark:text-zinc-300">{{ i18n.t('about.card2.text') }}</p>
          </p-card>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  readonly i18n = inject(I18nService);
}

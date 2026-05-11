import { Component, inject } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TimelineModule],
  template: `
    <section id="experience" class="bg-white py-20 dark:bg-zinc-950">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="animate-page-in text-3xl font-black text-slate-950 dark:text-white">{{ i18n.t('experience.title') }}</h2>
        <p class="mt-3 text-slate-600 animate-page-in [animation-delay:70ms] dark:text-zinc-300">{{ i18n.t('experience.subtitle') }}</p>
        <p-timeline [value]="events" align="alternate" styleClass="mt-12">
          <ng-template pTemplate="content" let-event>
            <article class="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <p class="text-sm font-semibold text-teal-600">{{ event.period }}</p>
              <h3 class="mt-2 text-xl font-bold text-slate-950 dark:text-white">{{ event.role }}</h3>
              <p class="mt-2 text-slate-600 dark:text-zinc-300">{{ event.company }}</p>
              <p class="mt-3 text-sm leading-6 text-slate-500 dark:text-zinc-400">{{ event.summary }}</p>
            </article>
          </ng-template>
        </p-timeline>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  readonly i18n = inject(I18nService);
  readonly events = [
    {
      period: '2024 - Atual',
      role: 'Desenvolvedor Front-end',
      company: 'Empresa Atual',
      summary: 'Construcao de interfaces Angular, integracao com APIs e melhoria continua da experiencia do usuario.'
    },
    {
      period: '2022 - 2024',
      role: 'Desenvolvedor Web',
      company: 'Projeto / Consultoria',
      summary: 'Criacao de landing pages, paineis administrativos e componentes reutilizaveis.'
    }
  ];
}

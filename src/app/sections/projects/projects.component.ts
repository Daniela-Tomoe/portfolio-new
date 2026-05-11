import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonModule, CardModule, TagModule],
  template: `
    <section id="projects" class="bg-slate-50 py-20 dark:bg-zinc-900">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="animate-page-in text-3xl font-black text-slate-950 dark:text-white">{{ i18n.t('projects.title') }}</h2>
        <p class="mt-3 text-slate-600 animate-page-in [animation-delay:70ms] dark:text-zinc-300">{{ i18n.t('projects.subtitle') }}</p>
        <div class="mt-10 grid gap-5 lg:grid-cols-3">
          @for (project of projects; track project.title) {
            <p-card [header]="project.title" [subheader]="project.type">
              <p class="min-h-24 text-slate-600 dark:text-zinc-300">{{ project.description }}</p>
              <div class="mb-5 flex flex-wrap gap-2">
                @for (tech of project.techs; track tech) {
                  <p-tag [value]="tech" severity="info" />
                }
              </div>
              <p-button label="GitHub" icon="pi pi-github" severity="secondary" [outlined]="true" />
            </p-card>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  readonly i18n = inject(I18nService);
  readonly projects = [
    {
      title: 'Dashboard SaaS',
      type: 'Angular + PrimeNG',
      description: 'Painel responsivo com metricas, filtros e componentes reutilizaveis.',
      techs: ['Angular', 'PrimeNG', 'Charts']
    },
    {
      title: 'Portfolio i18n',
      type: 'Website',
      description: 'Experiencia bilingue com tema claro/escuro e navegacao por secoes.',
      techs: ['i18n', 'Tailwind', 'UX']
    },
    {
      title: 'Portal de Conteudo',
      type: 'Frontend',
      description: 'Interface editorial com cards, busca, estados vazios e layout adaptativo.',
      techs: ['TypeScript', 'API', 'Design System']
    }
  ];
}

import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonModule, CardModule, TagModule],
  templateUrl: './projects.component.html'
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
      description: 'Experiencia bilingue com temas personalizados e navegacao por secoes.',
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

import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

type Project = {
  title: string;
  type: string;
  image: string;
  description: string;
  details: string;
  techs: string[];
  liveDemoUrl: string;
  githubUrl: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonModule, DialogModule, TagModule, ScrollRevealDirective],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  readonly i18n = inject(I18nService);
  selectedProject: Project | null = null;
  isProjectDialogOpen = false;

  readonly projects: Project[] = [
    {
      title: 'Dashboard SaaS',
      type: 'Angular + PrimeNG',
      image: 'assets/images/project-1.png',
      description: 'Painel responsivo com metricas, filtros e componentes reutilizaveis.',
      details:
        'Dashboard responsivo desenvolvido para centralizar indicadores, filtros e visualizacao de dados em uma interface clara. O projeto prioriza componentizacao, consistencia visual e uma experiencia fluida para analise rapida de informacoes.',
      techs: ['Angular', 'PrimeNG', 'Charts'],
      liveDemoUrl: 'https://example.com',
      githubUrl: 'https://github.com/'
    },
    {
      title: 'Portfolio i18n',
      type: 'Website',
      image: 'assets/images/project-1.png',
      description: 'Experiencia bilingue com temas personalizados e navegacao por secoes.',
      details:
        'Portfolio em pagina unica com suporte a conteudo bilingue, navegacao por secoes e interface adaptada para leitura rapida. O foco foi criar uma apresentacao objetiva, acessivel e facil de manter.',
      techs: ['Angular', 'i18n', 'Tailwind CSS'],
      liveDemoUrl: 'https://example.com',
      githubUrl: 'https://github.com/'
    },
    {
      title: 'Portal de Conteudo',
      type: 'Frontend',
      image: 'assets/images/project-1.png',
      description: 'Interface editorial com cards, busca, estados vazios e layout adaptativo.',
      details:
        'Interface editorial pensada para organizacao e descoberta de conteudo, com cards reutilizaveis, busca, estados vazios e layout adaptativo. A estrutura foi planejada para facilitar evolucao e integracao com APIs.',
      techs: ['TypeScript', 'REST APIs', 'Design System'],
      liveDemoUrl: 'https://example.com',
      githubUrl: 'https://github.com/'
    }
  ];

  openProject(project: Project): void {
    this.selectedProject = project;
    this.isProjectDialogOpen = true;
  }
}

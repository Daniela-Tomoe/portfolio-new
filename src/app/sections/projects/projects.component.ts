import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

type Project = {
  title: string;
  image?: string;
  isConfidential?: boolean;
  description: string;
  details: string;
  techs: string[];
  liveDemoUrl: string;
  githubUrl: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonModule, ChipModule, DialogModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly i18n = inject(I18nService);
  selectedProject: Project | null = null;
  isProjectDialogOpen = false;

  readonly projects: Project[] = [
    {
      title: 'ONG DB',
      image: 'assets/images/project-ong-db.png',
      description: 'Painel responsivo com metricas, filtros e componentes reutilizaveis.',
      details:
        'Desenvolvi um site institucional responsivo para uma ONG de doações fictícia, com foco em apresentar a causa, explicar o processo de resgate e cuidado dos animais e permitir que o usuário simule uma doação online. O projeto conta com uma página inicial com vídeo de destaque, seções informativas, cards de serviços, acordeão interativo, mapa incorporado e uma página de doação com formulário em múltiplas etapas, validação de dados e tela de confirmação.\n\nO projeto foi construído com HTML5, CSS3 e JavaScript puro, sem frameworks, priorizando a organização modular dos estilos e a criação de componentes reutilizáveis. A interface utiliza fontes externas do Google Fonts, ícones do Font Awesome, Google Maps incorporado e recursos visuais próprios, como imagens e vídeo.',
      techs: ['HTML5', 'CSS3', 'JavaScript'],
      liveDemoUrl: 'https://example.com',
      githubUrl: 'https://github.com/'
    },
    {
      title: 'Portfolio antigo',
      image: 'assets/images/project-old-portfolio.png',
      description: 'Experiencia bilingue com temas personalizados e navegacao por secoes.',
      details:
        'Portfolio em pagina unica com suporte a conteudo bilingue, navegacao por secoes e interface adaptada para leitura rapida. O foco foi criar uma apresentacao objetiva, acessivel e facil de manter.',
      techs: ['Angular', 'i18n', 'Tailwind CSS'],
      liveDemoUrl: 'https://example.com',
      githubUrl: 'https://github.com/'
    },
    {
      title: 'Software de Gestão de Fazenda',
      isConfidential: true,
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

import { Component, inject } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TimelineModule, ScrollRevealDirective],
  templateUrl: './experience.component.html'
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

import { Component, inject } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ChipModule, ScrollRevealDirective],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  readonly i18n = inject(I18nService);
  readonly skillGroups = [
    { title: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS', 'PrimeNG', 'Tailwind CSS'] },
    { title: 'Qualidade', items: ['Componentizacao', 'Acessibilidade', 'Responsividade', 'Clean Code'] },
    { title: 'Ferramentas', items: ['Git', 'REST APIs', 'Figma', 'CI/CD', 'Scrum'] }
  ];
}

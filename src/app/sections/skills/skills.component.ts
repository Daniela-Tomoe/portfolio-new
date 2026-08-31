import { Component, inject } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

type SkillItem = string | { key: string };

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ChipModule, ScrollRevealDirective],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  readonly i18n = inject(I18nService);
  readonly skillGroups = [
    {
      titleKey: 'skills.group.frontend',
      items: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'SCSS/SASS',
        'RxJS',
        'REST APIs'
      ]
    },
    {
      titleKey: 'skills.group.ui',
      items: [
        'Tailwind CSS',
        'PrimeNG',
        'Angular Material',
        'Bootstrap',
        { key: 'skills.item.componentization' },
        { key: 'skills.item.responsiveness' },
        { key: 'skills.item.accessibility' },
        { key: 'skills.item.usability' }
      ]
    },
    {
      titleKey: 'skills.group.testing',
      items: [
        'Vitest',
        'Angular TestBed',
        { key: 'skills.item.unitTesting' },
        { key: 'skills.item.componentTesting' },
        { key: 'skills.item.codeCoverage' },
        'Clean Code'
      ]
    },
    {
      titleKey: 'skills.group.tools',
      items: [
        'Git',
        'GitHub',
        'Azure DevOps',
        'OpenAI Codex',
        'MCP',
        { key: 'skills.item.agileMethodologies' }
      ]
    }
  ];

  skillLabel(item: SkillItem): string {
    return typeof item === 'string' ? item : this.i18n.t(item.key);
  }
}

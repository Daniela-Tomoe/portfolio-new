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
        'Tailwind CSS'
      ]
    },
    {
      titleKey: 'skills.group.quality',
      items: [
        { key: 'skills.item.componentization' },
        { key: 'skills.item.responsiveness' },
        { key: 'skills.item.accessibility' },
        { key: 'skills.item.usability' },
        'Clean Code',
        { key: 'skills.item.bugFixing' }
      ]
    },
    {
      titleKey: 'skills.group.technologies',
      items: [
        'RxJS',
        'PrimeNG',
        'Angular Material',
        'Bootstrap',
        'REST APIs',
        'Git',
        'GitHub',
        'Azure DevOps',
        'Scrum',
        'Vercel'
      ]
    }
  ];

  skillLabel(item: SkillItem): string {
    return typeof item === 'string' ? item : this.i18n.t(item.key);
  }
}

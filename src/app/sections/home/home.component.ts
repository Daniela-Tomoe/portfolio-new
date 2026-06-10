import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, TagModule, ScrollRevealDirective],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly i18n = inject(I18nService);

  get resumeUrl(): string {
    return this.i18n.language() === 'pt' ? 'assets/docs/DanielaTomoe-ResumePtbr.pdf' : 'assets/docs/DanielaTomoe-ResumeEng.pdf';
  }

  get resumeFileName(): string {
    return this.i18n.language() === 'pt' ? 'DanielaTomoe-ResumePtbr.pdf' : 'DanielaTomoe-ResumeEng.pdf';
  }

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

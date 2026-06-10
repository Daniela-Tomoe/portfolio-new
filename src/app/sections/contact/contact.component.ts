import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective, ToastModule],
  providers: [MessageService],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  readonly i18n = inject(I18nService);
  private readonly messageService = inject(MessageService);
  readonly email = 'Danielatomoenk@gmail.com';
  readonly linkedinUrl = 'https://www.linkedin.com/in/danielatomoe';
  readonly githubUrl = 'https://github.com/Daniela-Tomoe';

  async copyEmail(): Promise<void> {
    try {
      if (!navigator.clipboard) {
        throw new Error('Clipboard API unavailable');
      }

      await navigator.clipboard.writeText(this.email);
      this.messageService.add({
        severity: 'success',
        summary: this.i18n.t('contact.copyEmail.success.summary'),
        detail: this.i18n.t('contact.copyEmail.success.detail')
      });
    } catch {
      this.messageService.add({
        severity: 'error',
        summary: this.i18n.t('contact.copyEmail.error.summary'),
        detail: this.i18n.t('contact.copyEmail.error.detail')
      });
    }
  }
}

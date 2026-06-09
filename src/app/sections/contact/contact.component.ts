import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  readonly i18n = inject(I18nService);
  readonly email = 'email@exemplo.com';
  readonly linkedinUrl = 'https://www.linkedin.com/in/seu-perfil';
  readonly githubUrl = 'https://github.com/seu-usuario';

  copyEmail(): void {
    void navigator.clipboard.writeText(this.email);
  }
}

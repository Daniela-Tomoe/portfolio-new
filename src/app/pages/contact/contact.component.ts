import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputTextModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  readonly i18n = inject(I18nService);
}

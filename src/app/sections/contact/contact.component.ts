import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputTextModule],
  template: `
    <section id="contact" class="bg-slate-50 py-20 dark:bg-zinc-900">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div class="animate-page-in">
          <h2 class="text-3xl font-black text-slate-950 dark:text-white">{{ i18n.t('contact.title') }}</h2>
          <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-zinc-300">{{ i18n.t('contact.subtitle') }}</p>
          <div class="mt-8 space-y-3 text-slate-600 dark:text-zinc-300">
            <p><i class="pi pi-envelope mr-2 text-teal-600"></i>email&#64;exemplo.com</p>
            <p><i class="pi pi-linkedin mr-2 text-teal-600"></i>linkedin.com/in/seu-perfil</p>
            <p><i class="pi pi-github mr-2 text-teal-600"></i>github.com/seu-usuario</p>
          </div>
        </div>

        <form class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm animate-page-in [animation-delay:90ms] dark:border-zinc-800 dark:bg-zinc-950">
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-medium text-slate-700 dark:text-zinc-200">
              {{ i18n.t('contact.name') }}
              <input pInputText type="text" name="name" />
            </label>
            <label class="grid gap-2 text-sm font-medium text-slate-700 dark:text-zinc-200">
              {{ i18n.t('contact.email') }}
              <input pInputText type="email" name="email" />
            </label>
          </div>
          <label class="mt-4 grid gap-2 text-sm font-medium text-slate-700 dark:text-zinc-200">
            {{ i18n.t('contact.message') }}
            <textarea class="min-h-36 rounded-md border border-slate-300 bg-white p-3 outline-none focus:border-teal-500 dark:border-zinc-700 dark:bg-zinc-900" name="message"></textarea>
          </label>
          <div class="mt-5">
            <p-button [label]="i18n.t('contact.send')" icon="pi pi-send" severity="success" />
          </div>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {
  readonly i18n = inject(I18nService);
}

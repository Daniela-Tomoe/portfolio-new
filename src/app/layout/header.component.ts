import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { I18nService } from '../core/i18n.service';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a routerLink="/" class="text-lg font-bold tracking-normal text-slate-950 dark:text-white">Dev Portfolio</a>

        <nav class="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-zinc-300 md:flex">
          <a class="transition hover:text-teal-600" routerLink="/" routerLinkActive="text-teal-600" [routerLinkActiveOptions]="{ exact: true }">{{ i18n.t('nav.home') }}</a>
          <a class="transition hover:text-teal-600" routerLink="/about" routerLinkActive="text-teal-600">{{ i18n.t('nav.about') }}</a>
          <a class="transition hover:text-teal-600" routerLink="/skills" routerLinkActive="text-teal-600">{{ i18n.t('nav.skills') }}</a>
          <a class="transition hover:text-teal-600" routerLink="/projects" routerLinkActive="text-teal-600">{{ i18n.t('nav.projects') }}</a>
          <a class="transition hover:text-teal-600" routerLink="/experience" routerLinkActive="text-teal-600">{{ i18n.t('nav.experience') }}</a>
          <a class="transition hover:text-teal-600" routerLink="/contact" routerLinkActive="text-teal-600">{{ i18n.t('nav.contact') }}</a>
        </nav>

        <div class="flex items-center gap-2">
          <p-button [label]="i18n.language().toUpperCase()" severity="secondary" [outlined]="true" size="small" (onClick)="i18n.toggleLanguage()" />
          <p-button [icon]="theme.dark() ? 'pi pi-sun' : 'pi pi-moon'" severity="secondary" [rounded]="true" [outlined]="true" size="small" (onClick)="theme.toggle()" />
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  readonly i18n = inject(I18nService);
  readonly theme = inject(ThemeService);
}

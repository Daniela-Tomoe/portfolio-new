import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule, TagModule],
  template: `
    <section id="hero" class="bg-white dark:bg-zinc-950">
      <div class="mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div class="animate-page-in">
          <p-tag severity="success" [value]="i18n.t('hero.badge')" />
          <h1 class="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            {{ i18n.t('hero.title') }}
          </h1>
          <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-300">
            {{ i18n.t('hero.subtitle') }}
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <p-button [label]="i18n.t('hero.cta.primary')" icon="pi pi-briefcase" severity="success" (onClick)="goTo('/projects')" />
            <p-button [label]="i18n.t('hero.cta.secondary')" icon="pi pi-send" severity="secondary" [outlined]="true" (onClick)="goTo('/contact')" />
          </div>
        </div>

        <div class="grid gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm animate-page-in [animation-delay:90ms] dark:border-zinc-800 dark:bg-zinc-900">
          <div class="rounded-md bg-white p-5 dark:bg-zinc-950">
            <span class="text-4xl font-black text-teal-600">4+</span>
            <p class="mt-2 text-sm text-slate-500 dark:text-zinc-400">{{ i18n.t('hero.metric.years') }}</p>
          </div>
          <div class="rounded-md bg-white p-5 dark:bg-zinc-950">
            <span class="text-4xl font-black text-amber-500">20+</span>
            <p class="mt-2 text-sm text-slate-500 dark:text-zinc-400">{{ i18n.t('hero.metric.projects') }}</p>
          </div>
          <div class="rounded-md bg-white p-5 dark:bg-zinc-950">
            <span class="text-2xl font-black text-cyan-600">Angular</span>
            <p class="mt-2 text-sm text-slate-500 dark:text-zinc-400">{{ i18n.t('hero.metric.stack') }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  goTo(path: string): void {
    this.router.navigateByUrl(path);
  }
}

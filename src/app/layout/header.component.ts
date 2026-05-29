import { AfterViewInit, Component, OnDestroy, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { I18nService } from '../core/i18n.service';

type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  readonly i18n = inject(I18nService);
  readonly activeSection = signal<SectionId>('hero');
  readonly navItems: Array<{ id: SectionId; labelKey: string }> = [
    { id: 'hero', labelKey: 'nav.home' },
    { id: 'about', labelKey: 'nav.about' },
    { id: 'skills', labelKey: 'nav.skills' },
    { id: 'projects', labelKey: 'nav.projects' },
    { id: 'experience', labelKey: 'nav.experience' },
    { id: 'contact', labelKey: 'nav.contact' }
  ];

  isMenuOpen = false;
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const sections = this.navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          this.activeSection.set(visibleEntry.target.id as SectionId);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((section) => this.observer?.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(sectionId: SectionId): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeSection.set(sectionId);
    this.closeMenu();
  }
}

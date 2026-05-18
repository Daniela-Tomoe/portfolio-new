import { Injectable, signal } from '@angular/core';

export type Language = 'pt' | 'en';

const translations: Record<Language, Record<string, string>> = {
  pt: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contato',
    'hero.badge': 'Portfolio Angular',
    'hero.title': 'Desenvolvedor Front-end focado em interfaces modernas',
    'hero.subtitle': 'Crio experiencias digitais responsivas, acessiveis e prontas para crescer com Angular, PrimeNG e Tailwind CSS.',
    'hero.cta.primary': 'Ver projetos',
    'hero.cta.secondary': 'Falar comigo',
    'hero.metric.years': 'Anos de pratica',
    'hero.metric.stack': 'Stack principal',
    'about.title': 'Sobre mim',
    'about.text': 'Sou um desenvolvedor que gosta de transformar requisitos em produtos claros, bem componentizados e agradaveis de usar. Valorizo codigo organizado, consistencia visual e colaboracao com times de produto.',
    'about.card1.title': 'Produto',
    'about.card1.text': 'Traduzo objetivos de negocio em fluxos simples, mensuraveis e responsivos.',
    'about.card2.title': 'Engenharia',
    'about.card2.text': 'Crio componentes reutilizaveis, servicos pequenos e uma base facil de manter.',
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Ferramentas e praticas que sustentam a experiencia.',
    'projects.title': 'Projetos',
    'projects.subtitle': 'Exemplos para substituir pelos seus cases reais.',
    'experience.title': 'Experiencia Profissional',
    'experience.subtitle': 'Uma linha do tempo objetiva para destacar sua trajetoria.',
    'contact.title': 'Contato',
    'contact.subtitle': 'Vamos conversar sobre seu proximo projeto ou oportunidade.',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar mensagem',
    'footer.text': 'Construido com Angular, PrimeNG e Tailwind CSS.'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.badge': 'Angular Portfolio',
    'hero.title': 'Front-end developer focused on modern interfaces',
    'hero.subtitle': 'I build responsive, accessible digital experiences ready to scale with Angular, PrimeNG and Tailwind CSS.',
    'hero.cta.primary': 'View projects',
    'hero.cta.secondary': 'Contact me',
    'hero.metric.years': 'Years practicing',
    'hero.metric.stack': 'Main stack',
    'about.title': 'About me',
    'about.text': 'I am a developer who enjoys turning requirements into clear, well-componentized products that feel good to use. I value organized code, visual consistency and collaboration with product teams.',
    'about.card1.title': 'Product',
    'about.card1.text': 'I translate business goals into simple, measurable and responsive flows.',
    'about.card2.title': 'Engineering',
    'about.card2.text': 'I create reusable components, focused services and a codebase that is easy to maintain.',
    'skills.title': 'Skills',
    'skills.subtitle': 'Tools and practices behind the experience.',
    'projects.title': 'Projects',
    'projects.subtitle': 'Examples you can replace with your real case studies.',
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'A focused timeline to highlight your path.',
    'contact.title': 'Contact',
    'contact.subtitle': 'Let us talk about your next project or opportunity.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'footer.text': 'Built with Angular, PrimeNG and Tailwind CSS.'
  }
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly language = signal<Language>((localStorage.getItem('language') as Language) || 'pt');

  setLanguage(language: Language): void {
    this.language.set(language);
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }

  toggleLanguage(): void {
    this.setLanguage(this.language() === 'pt' ? 'en' : 'pt');
  }

  t(key: string): string {
    return translations[this.language()][key] ?? key;
  }
}

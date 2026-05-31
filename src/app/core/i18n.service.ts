import { Injectable, signal } from '@angular/core';

export type Language = 'pt' | 'en';

const translations: Record<Language, Record<string, string>> = {
  pt: {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    'theme.toDashboard': 'Usar tema SaaS dashboard',
    'theme.toTech': 'Usar tema tech moderno',
    'hero.badge': 'Portfolio Angular',
    'hero.title': 'Daniela Tomoe Kawamata Kurahara',
    'hero.role': 'Desenvolvedora Front-end',
    'hero.subtitle': 'Criando aplicações web modernas e escaláveis, com foco em performance, usabilidade e experiência do usuário.',
    // 'hero.subtitle': 'Crio experiencias digitais responsivas, acessiveis e prontas para crescer com Angular, PrimeNG e Tailwind CSS.',
    'hero.cta.primary': 'Ver projetos',
    'hero.cta.secondary': 'Falar comigo',
    'hero.metric.years': 'Anos de experiência',
    'hero.metric.stack': 'Stack principal',
    'about.title': 'Sobre mim',
    'about.paragraph1': 'Olá! Eu sou a Dani, desenvolvedora front-end do Brasil. Gosto de criar interfaces responsivas, acessíveis e visualmente fiéis ao design, sempre buscando unir código limpo, boa experiência de usuário e atenção aos detalhes.',
    'about.paragraph2': 'Minha jornada na programação começou em 2022, durante uma transição de carreira. Sou formada em Medicina Veterinária, mas encontrei no desenvolvimento web uma área em que posso unir criatividade, lógica e aprendizado constante. Desde então, venho construindo minha base em HTML, CSS e JavaScript por meio de estudos independentes, cursos online e projetos práticos, além de me especializar no ecossistema Angular.',
    'about.paragraph3': 'Atualmente, tenho 2 anos de experiência profissional como desenvolvedora front-end, trabalhando no desenvolvimento de aplicações web responsivas, com foco em usabilidade, componentização e interfaces pixel-perfect.',
    'about.paragraph4': 'Quando não estou programando, provavelmente estou lendo, jogando algum cozy game ou descobrindo uma nova obsessão aleatória.',
    'about.photoAlt': 'Foto de Daniela Tomoe',
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Ferramentas e práticas que sustentam a experiência.',
    'skills.group.frontend': 'Front-end',
    'skills.group.quality': 'Boas práticas',
    'skills.group.technologies': 'Tecnologias',
    'skills.item.componentization': 'Componentização',
    'skills.item.responsiveness': 'Responsividade',
    'skills.item.accessibility': 'Acessibilidade',
    'skills.item.usability': 'Usabilidade',
    'skills.item.bugFixing': 'Correção de bugs',
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
    // 'footer.text': 'Construido com Angular, PrimeNG e Tailwind CSS.'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'theme.toDashboard': 'Use SaaS dashboard theme',
    'theme.toTech': 'Use modern tech theme',
    'hero.badge': 'Angular Portfolio',
    'hero.title': 'Daniela Tomoe Kawamata Kurahara',
    'hero.role': 'Front-end developer',
    'hero.subtitle': 'Building modern, scalable web applications with a focus on performance, usability, and user experience.',
    // 'hero.subtitle': 'I build responsive, accessible digital experiences ready to scale with Angular, PrimeNG and Tailwind CSS.',
    'hero.cta.primary': 'View projects',
    'hero.cta.secondary': 'Contact me',
    'hero.metric.years': 'Years of experience',
    'hero.metric.stack': 'Main stack',
    'about.title': 'About me',
    'about.paragraph1': 'Hi! I am Dani, a front-end developer from Brazil. I enjoy creating responsive, accessible interfaces that stay visually faithful to the design, always aiming to combine clean code, good user experience, and attention to detail.',
    'about.paragraph2': 'My programming journey started in 2022, during a career transition. I have a degree in Veterinary Medicine, but I found in web development a field where I can bring together creativity, logic, and constant learning. Since then, I have been building my foundation in HTML, CSS, and JavaScript through independent study, online courses, and practical projects, while also specializing in the Angular ecosystem.',
    'about.paragraph3': 'I currently have 2 years of professional experience as a front-end developer, working on responsive web applications with a focus on usability, componentization, and pixel-perfect interfaces.',
    'about.paragraph4': 'When I am not coding, I am probably reading, playing a cozy game, or discovering a new random obsession.',
    'about.photoAlt': 'Photo of Daniela Tomoe',
    'skills.title': 'Skills',
    'skills.subtitle': 'Tools and practices behind the experience.',
    'skills.group.frontend': 'Front-end',
    'skills.group.quality': 'Best practices',
    'skills.group.technologies': 'Technologies',
    'skills.item.componentization': 'Componentization',
    'skills.item.responsiveness': 'Responsive design',
    'skills.item.accessibility': 'Accessibility',
    'skills.item.usability': 'Usability',
    'skills.item.bugFixing': 'Bug fixing',
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
    // 'footer.text': 'Built with Angular, PrimeNG and Tailwind CSS.'
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

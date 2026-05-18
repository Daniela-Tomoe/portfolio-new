import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Portfolio',
    data: { animation: 'home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Sobre mim | Portfolio',
    data: { animation: 'about' }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Habilidades | Portfolio',
    data: { animation: 'skills' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projetos | Portfolio',
    data: { animation: 'projects' }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Experiencia | Portfolio',
    data: { animation: 'experience' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contato | Portfolio',
    data: { animation: 'contact' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

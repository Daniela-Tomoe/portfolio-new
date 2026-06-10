import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

type ProjectDetailSection = {
  titleKey: string;
  contentKey: string;
};

type ProjectTechnologySection = {
  titleKey: string;
  itemsKey: string;
};

type Project = {
  id: string;
  titleKey: string;
  image?: string;
  isConfidential?: boolean;
  descriptionKey: string;
  detailsKey: string;
  detailSections?: ProjectDetailSection[];
  dialogTechnologySections?: ProjectTechnologySection[];
  techs: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonModule, ChipModule, DialogModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly i18n = inject(I18nService);
  readonly githubRepositoryUrl = 'https://github.com/Daniela-Tomoe';
  selectedProject: Project | null = null;
  isProjectDialogOpen = false;

  readonly projects: Project[] = [
    {
      id: 'ong-db',
      titleKey: 'projects.ongDb.title',
      image: 'assets/images/project-ong-db.png',
      descriptionKey: 'projects.ongDb.description',
      detailsKey: 'projects.ongDb.details',
      detailSections: [
        {
          titleKey: 'projects.ongDb.section.about.title',
          contentKey: 'projects.ongDb.section.about.content'
        },
        {
          titleKey: 'projects.ongDb.section.features.title',
          contentKey: 'projects.ongDb.section.features.content'
        }
      ],
      dialogTechnologySections: [
        {
          titleKey: 'projects.technologies.group.core',
          itemsKey: 'projects.ongDb.technologies.core'
        },
        {
          titleKey: 'projects.technologies.group.ui',
          itemsKey: 'projects.ongDb.technologies.ui'
        },
        {
          titleKey: 'projects.technologies.group.integrations',
          itemsKey: 'projects.ongDb.technologies.integrations'
        }
      ],
      techs: ['HTML5', 'CSS3', 'JavaScript'],
      liveDemoUrl: 'https://daniela-tomoe.github.io/Ong-DB-Projeto/pages/home/',
      githubUrl: 'https://github.com/Daniela-Tomoe/Ong-DB-Projeto'
    },
    {
      id: 'old-portfolio',
      titleKey: 'projects.oldPortfolio.title',
      image: 'assets/images/project-old-portfolio.png',
      descriptionKey: 'projects.oldPortfolio.description',
      detailsKey: 'projects.oldPortfolio.details',
      detailSections: [
        {
          titleKey: 'projects.oldPortfolio.section.about.title',
          contentKey: 'projects.oldPortfolio.section.about.content'
        },
        {
          titleKey: 'projects.oldPortfolio.section.features.title',
          contentKey: 'projects.oldPortfolio.section.features.content'
        }
      ],
      dialogTechnologySections: [
        {
          titleKey: 'projects.technologies.group.core',
          itemsKey: 'projects.oldPortfolio.technologies.core'
        },
        {
          titleKey: 'projects.technologies.group.ui',
          itemsKey: 'projects.oldPortfolio.technologies.ui'
        },
        {
          titleKey: 'projects.technologies.group.integrations',
          itemsKey: 'projects.oldPortfolio.technologies.integrations'
        }
      ],
      techs: ['HTML5', 'SCSS/SASS', 'JavaScript', 'Vite', 'i18n'],
      liveDemoUrl: 'https://portfolio-daniela-tomoes-projects.vercel.app/pages/portfolio.html',
      githubUrl: 'https://github.com/Daniela-Tomoe/Portfolio'
    },
    {
      id: 'farm-management',
      titleKey: 'projects.farmManagement.title',
      isConfidential: true,
      descriptionKey: 'projects.farmManagement.description',
      detailsKey: 'projects.farmManagement.details',
      detailSections: [
        {
          titleKey: 'projects.farmManagement.section.about.title',
          contentKey: 'projects.farmManagement.section.about.content'
        },
        {
          titleKey: 'projects.farmManagement.section.contribution.title',
          contentKey: 'projects.farmManagement.section.contribution.content'
        },
        {
          titleKey: 'projects.farmManagement.section.features.title',
          contentKey: 'projects.farmManagement.section.features.content'
        }
      ],
      dialogTechnologySections: [
        {
          titleKey: 'projects.technologies.group.core',
          itemsKey: 'projects.farmManagement.technologies.core'
        },
        {
          titleKey: 'projects.technologies.group.ui',
          itemsKey: 'projects.farmManagement.technologies.ui'
        },
        {
          titleKey: 'projects.technologies.group.integrations',
          itemsKey: 'projects.farmManagement.technologies.integrations'
        },
        {
          titleKey: 'projects.technologies.group.quality',
          itemsKey: 'projects.farmManagement.technologies.quality'
        }
      ],
      techs: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'PrimeNG'],
    }
  ];

  openProject(project: Project): void {
    this.selectedProject = project;
    this.isProjectDialogOpen = true;
  }
}

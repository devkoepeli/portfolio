import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeroComponent } from './hero/hero.component';
import { SkillSetComponent } from './skill-set/skill-set.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeroComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillSetComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}

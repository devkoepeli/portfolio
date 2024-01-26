import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { SkillSetComponent } from './skill-set/skill-set.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeroComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillSetComponent,
    MyWorkComponent,
    ContactComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  constructor() {}

}

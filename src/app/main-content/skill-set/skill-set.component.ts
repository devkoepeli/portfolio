import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  skills = [
    { name: 'Angular', image: './assets/img/angular.svg' },
    { name: 'TypeScript', image: './assets/img/typescript.svg' },
    { name: 'JavaScript', image: './assets/img/javascript.svg' },
    { name: 'HTML', image: './assets/img/html.svg' },
    { name: 'Scrum', image: './assets/img/scrum.svg' },
    { name: 'Firebase', image: './assets/img/firebase.svg' },
    { name: 'GIT', image: './assets/img/git.svg' },
    { name: 'CSS', image: './assets/img/css.svg' },
    { name: 'Rest-Api', image: './assets/img/api.svg' },
    { name: 'Material', image: './assets/img/material.svg' }
  ]
}

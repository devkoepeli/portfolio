import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent implements OnInit {
  skills = [
    { name: 'Angular', image: './assets/img/angular.svg' },
    { name: 'TypeScript', image: './assets/img/typescript.svg' },
    { name: 'JavaScript', image: './assets/img/javascript.svg' },
    { name: 'HTML', image: './assets/img/html.svg' },
    { name: 'Scrum', image: './assets/img/scrum.svg' },
    { name: 'Firebase', image: './assets/img/firebase.svg' },
    { name: 'GIT', image: './assets/img/git.svg' },
    { name: 'CSS', image: './assets/img/css.svg' },
    { name: 'REST-API', image: './assets/img/api.svg' },
    { name: 'Material Design', image: './assets/img/material.svg' }
  ];

  ngOnInit(): void {
    AOS.init();
  }
}

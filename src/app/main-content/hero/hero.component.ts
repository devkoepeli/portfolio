import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  screenWidth!: number;

  translations = {
    english: {
      greet: "Hello! I am Devrim",
      title: "FRONTEND DEVELOPER"
    },
    german: {
      greet: "Hallo! Ich bin Devrim",
      title: "FRONTEND ENTWICKLER"
    }
  }

  @ViewChild('title') title!: ElementRef;
  @ViewChild('greet') greet!: ElementRef;

  constructor(private translation: TranslationService) {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    AOS.init();
  }

  isEnglish(): boolean {
    return this.translation.isEnglish;
  }
}

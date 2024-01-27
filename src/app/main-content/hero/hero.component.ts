import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  screenWidth!: number;
  
  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
  }
}

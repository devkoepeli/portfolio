import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  screenWidth!: number;
  
  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    AOS.init();
  }
}

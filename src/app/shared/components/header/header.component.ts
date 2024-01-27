import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isMainRoute = true;
  screenWidth!: number;

  isMenuOpen = false;

  constructor(private router: Router, private renderer: Renderer2) { 
    this.onResize();
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/legal-notice' || event.url == '/privacy-policy') {
          this.isMainRoute = false;
        } else {
          this.isMainRoute = true;
        }
      }
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'menu-open');
    } else {
      this.renderer.removeClass(document.body, 'menu-open');
    }
  }
}

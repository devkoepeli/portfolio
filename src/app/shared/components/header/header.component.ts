import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
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

  constructor(private router: Router) { }

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
}

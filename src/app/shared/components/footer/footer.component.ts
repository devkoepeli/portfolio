import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  clientHeight!: number;
  isLegalNoticeRoute = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.clientHeight = window.innerHeight;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/legal-notice') {
          this.isLegalNoticeRoute = true;
        } else {
          this.isLegalNoticeRoute = false;
        }
      }
    })
  }
}

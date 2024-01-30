import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

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

  translations = {
    english: "Legal Notice",
    german: "Impressum"
  }

  constructor(private router: Router, private translation: TranslationService) {}

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

  isEnglish(): boolean {
    return this.translation.isEnglish;
  }
}

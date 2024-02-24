import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit {
  isEnglish = true;
  translationSubscription!: Subscription;

  constructor(private translation: TranslationService) {}

  ngOnInit(): void {
    this.translationSubscription = this.translation.isEnglish.subscribe(value => this.isEnglish = value);
  }

  ngOnDestroy() {
    this.translationSubscription.unsubscribe();
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
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

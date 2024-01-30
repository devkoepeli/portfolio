import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor(private translation: TranslationService) {}

  isEnglish(): boolean {
    return this.translation.isEnglish;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  constructor(private translation: TranslationService) {}

  isEnglish(): boolean {
    return this.translation.isEnglish;
  }
}

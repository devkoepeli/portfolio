import { ElementRef, Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  isEnglish = true;

  constructor() { }

  translateToGerman() {
    if (this.isEnglish) {
      this.isEnglish = false;
    }
  }

  translateToEnglish() {
    if (!this.isEnglish) {
      this.isEnglish = true;
    }
  }
}

import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private isEnglishSubject = new BehaviorSubject<boolean>(true);
  isEnglish = this.isEnglishSubject.asObservable();

  constructor() { }

  translateToGerman() {
    if (this.isEnglishSubject.value) {
      this.isEnglishSubject.next(false);
    }
  }

  translateToEnglish() {
    if (!this.isEnglishSubject.value) {
      this.isEnglishSubject.next(true);
    }
  }
}

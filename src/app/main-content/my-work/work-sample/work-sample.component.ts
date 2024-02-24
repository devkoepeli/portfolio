import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Sample } from '../../../shared/interfaces/sample.interface';
import AOS from 'aos';
import { DataAosDirective } from '../../../shared/directives/data-aos.directive';
import { TranslationService } from '../../../shared/services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-sample',
  standalone: true,
  imports: [CommonModule, DataAosDirective],
  templateUrl: './work-sample.component.html',
  styleUrl: './work-sample.component.scss'
})
export class WorkSampleComponent implements OnInit {
  @Input() sample!: Sample;
  @Input() index!: number;
  @Input() samplesLength!: number;

  isEnglish = true;
  translationSubscription!: Subscription;

  constructor(private translation: TranslationService) {}

  ngOnInit(): void {
    AOS.init();
    this.translationSubscription = this.translation.isEnglish.subscribe(value => this.isEnglish = value);
  }

  ngOnDestroy() {
    this.translationSubscription.unsubscribe();
  }
}

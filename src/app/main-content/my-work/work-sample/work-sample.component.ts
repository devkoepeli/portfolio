import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Sample } from '../../../shared/interfaces/sample.interface';
import AOS from 'aos';
import { DataAosDirective } from '../../../shared/directives/data-aos.directive';
import { TranslationService } from '../../../shared/services/translation.service';

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
  
  constructor(private translation: TranslationService) {}

  ngOnInit(): void {
    AOS.init();
  }

  isEnglish(): boolean {
    return this.translation.isEnglish;
  }
}

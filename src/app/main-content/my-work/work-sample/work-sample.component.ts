import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Sample } from '../../../shared/interfaces/sample.interface';
import AOS from 'aos';
import { DataAosDirective } from '../../../shared/directives/data-aos.directive';

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

  ngOnInit(): void {
    AOS.init();
  }
}

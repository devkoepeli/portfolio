import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Sample } from '../../../shared/interfaces/sample.interface';


@Component({
  selector: 'app-work-sample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-sample.component.html',
  styleUrl: './work-sample.component.scss'
})
export class WorkSampleComponent {
  @Input() sample!: Sample;
  @Input() index!: number;
  @Input() samplesLength!: number;

}

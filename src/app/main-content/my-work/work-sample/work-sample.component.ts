import { Component, Input } from '@angular/core';

interface sample {
  title: string,
  tools: string,
  description: string,
  image: string
}

@Component({
  selector: 'app-work-sample',
  standalone: true,
  imports: [],
  templateUrl: './work-sample.component.html',
  styleUrl: './work-sample.component.scss'
})
export class WorkSampleComponent {
  @Input() sample!: sample;
  @Input() index!: number;
  @Input() samplesLength!: number;

}

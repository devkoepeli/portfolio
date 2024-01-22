import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkSampleComponent } from './work-sample/work-sample.component';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [WorkSampleComponent, CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  workSamples = [
    { 
      title: 'Join', 
      tools: 'JavaScript | HTML | CSS | API',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: './assets/img/join.png'
    },
    { 
      title: 'El Pollo Loco', 
      tools: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: './assets/img/epl.png'
    }
  ] 
}

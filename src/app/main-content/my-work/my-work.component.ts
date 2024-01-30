import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WorkSampleComponent } from './work-sample/work-sample.component';
import { Sample } from '../../shared/interfaces/sample.interface';
import AOS from 'aos';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [WorkSampleComponent, CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent implements OnInit {
  workSamples: Sample[] = [
    {
      title: 'Join',
      tools: 'JavaScript | HTML | CSS | API',
      description_en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      description_de: 'Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen und weisen Sie Benutzer und Kategorien zu.',
      image: './assets/img/join.png',
      testURL: 'https://join.devrimkoepeli.com',
      githubURL: 'https://github.com/devkoepeli/Join'
    },
    {
      title: 'El Pollo Loco',
      tools: 'JavaScript | HTML | CSS',
      description_en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      description_de: 'Ein Jump-, Run- und Throwspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      image: './assets/img/epl.png',
      testURL: 'https://epl.devrimkoepeli.com',
      githubURL: 'https://github.com/devkoepeli/El-Pollo-Loco'
    }
  ];

  translations = {
    english: {
      title: "My Work",
      subtitle: "This page is a sample of my work - please feel free to try them out.",
    },
    german: {
      title: "Meine Projekte",
      subtitle: "Diese Seite enthält eine Auswahl meiner Projekte – testen Sie sie gerne aus.",
    }
  }

  constructor(private translation: TranslationService) {}

  ngOnInit(): void {
    AOS.init();
  }

  isEnglish(): boolean {
    return this.translation.isEnglish;
  }
}

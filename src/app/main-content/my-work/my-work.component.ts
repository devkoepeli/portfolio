import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WorkSampleComponent } from './work-sample/work-sample.component';
import { Sample } from '../../shared/interfaces/sample.interface';
import AOS from 'aos';
import { TranslationService } from '../../shared/services/translation.service';
import { Subscription } from 'rxjs';

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
      description_en: 'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',
      description_de: 'Vom Kanban-System inspirierter Aufgabenmanager. Erstelle und organisiere Aufgaben mithilfe von Drag-and-Drop-Funktionen und weise Benutzer und Kategorien zu.',
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
    },
    {
      title: 'Simple-CRM',
      tools: 'Angular | TypeScript | HTML | SCSS | Firebase',
      description_en: 'With this easy-to-use CRM system, you are in charge of your e-commerce business. Manage customer information, have useful insights into your business, add new products, upload photos and track your inventory.',
      description_de: 'Mit diesem einfach zu bedienenden CRM System hast du die volle Kontrolle über dein E-Commerce Business. Verwalte Kundeninformationen, erhalte nützliche Einblicke in dein Geschäft, füge neue Produkte hinzu, lade Fotos hoch und steuere dein Inventar.',
      image: './assets/img/crm.png',
      testURL: 'https://crm.devrimkoepeli.com',
      githubURL: 'https://github.com/devkoepeli/Simple-CRM'
    }
  ];

  translations = {
    english: {
      title: "My Work",
      subtitle: "This page is a sample of my most recent work - please feel free to try them out.",
    },
    german: {
      title: "Meine Projekte",
      subtitle: "Diese Seite enthält eine Auswahl meiner Projekte – teste sie gerne aus.",
    }
  }

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

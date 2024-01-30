import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit{
  translations = {
    english: {
      title: "Let's work together",
      description_1: "As a Frontend Developer based in Aarau, Switzerland, I enjoy turning design concepts and business visions into solutions. With prior experience in designing websites that convert visitors to customers I understand the importance of an excellent user experience in applications. My straightforward approach and hands on mentality enable me to dive deep into new technologies and embrace technical challenges.",
      description_2: "If you're in search of a committed developer to bring your projects to life, I'm excited to connect with you!",
      button: "Send a message"
    },
    german: {
      title: "Lass uns zusammen arbeiten",
      description_1: "Als Frontend-Entwickler mit Sitz in Aarau, Schweiz, macht es mir Spaß, Designkonzepte und Geschäftsvisionen in Lösungen umzusetzen. Dank meiner Erfahrung in der Gestaltung von Websiten, die Besucher in Kunden verwandeln, weiss ich, wie wichtig eine intuitive Benutzererfahrung in Anwendungen ist. Meine unkomplizierte Herangehensweise und meine Hands-on-Mentalität ermöglichen es mir, tief in neue Technologien einzutauchen und technische Herausforderungen anzunehmen.",
      description_2: "Wenn Sie auf der Suche nach einem engagierten Entwickler sind, der Ihre Projekte zum Leben erweckt, freue ich mich, mit Ihnen in Kontakt zu treten!",
      button: "Nachricht schreiben"
    }
  };

  constructor(private translation: TranslationService) {}

  ngOnInit(): void {
    AOS.init();
  }

  isEnglish(): boolean {
    return this.translation.isEnglish;
  }
}

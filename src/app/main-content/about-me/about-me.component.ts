import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';
import { Subscription } from 'rxjs';
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
      description_1: "As a frontend developer based in Aarau, Switzerland, I have built several web applications with JavaScript and Angular. I enjoy turning design concepts and business visions into appealing and user-friendly interfaces. With prior work experience in designing websites that convert visitors to customers, I understand the importance of the user experience in applications.",
      description_2: "My passion lies in web technologies, solving challenges and translating client needs into solutions. Thanks to my straightforward approach and hands-on mentality I enjoy growing continuously and learning new technologies.",
      description_3: "If you're in search of a committed developer to bring your projects to life, I'm excited to connect with you!",
      button: "Send a message"
    },
    german: {
      title: "Lass uns zusammen arbeiten",
      description_1: "Als Frontend Entwickler aus Aarau, Schweiz, habe ich Erfahrungen im Programmieren von Web-Apps mit JavaScript und Angular. Es macht mir riesig Spass, aus Designkonzepten und Businessideen benutzerfreundliche und attraktive Anwendungen zu entwickeln. Dank meiner Erfahrung im Erstellen von Conversion optimierten Webseiten weiss ich, wie wichtig die User Experience ist.",
      description_2: "Die Webentwicklung ist meine Leidenschaft. Ich liebe es, knifflige Probleme zu lösen und Kundenwünsche in echte Lösungen umzusetzen. Meine zielstrebige Art und meine Motivation, anzupacken, helfen mir dabei, stetig dazuzulernen und mich in neuen Technologien weiterzubilden.",
      description_3: "Wenn Du einen engagierten Entwickler suchst, der Deine Projekte im Web zum Leben erweckt, freue ich mich, von Dir zu hören!",
      button: "Nachricht schreiben"
    }
  };
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

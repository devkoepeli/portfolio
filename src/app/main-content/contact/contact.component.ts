import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import AOS from 'aos';
import { TranslationService } from '../../shared/services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  translations = {
    english: {
      title: "Contact",
      subtitle: "Got a problem to solve?",
      description: "Contact me through this form, I am interested in hearing you, knowing your ideas and contributing to your projects with my work.",
      q: "Need a Frontend developer?",
      a: "Contact me!"
    },
    german: {
      title: "Kontakt",
      subtitle: "Du möchtest ein Problem lösen?",
      description: "Kontaktiere mich über dieses Formular. Ich freue mich darauf, Deine Ideen kennenzulernen und mit meiner Arbeit zu Deinen Projekten beizutragen.",
      q: "Brauchst Du einen Frontend Entwickler?",
      a: "Kontaktiere mich!"
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

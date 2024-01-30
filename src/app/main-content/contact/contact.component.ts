import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import AOS from 'aos';
import { TranslationService } from '../../shared/services/translation.service';

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
      subtitle: "Sie möchten ein Problem lösen?",
      description: "Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, Sie zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.",
      q: "Brauchen Sie einen Frontend Entwickler?",
      a: "Kontaktieren Sie mich!"
    }
  }

  constructor(private translation: TranslationService) { }

  ngOnInit() {
    AOS.init();
  }

  isEnglish(): boolean {
    return this.translation.isEnglish;
  }
}

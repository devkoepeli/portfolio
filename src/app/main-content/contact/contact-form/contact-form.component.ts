import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  message: string = '';
  privacyPolicyAccepted: boolean = false;

  isLoading = false;
  isSent = false;
  isNameFocused = false;
  isEmailFocused = false;
  isMessageFocused = false;
  failedToSend = false;

  translations = {
    english: {
      name: "Your name",
      email: "Your email",
      message: "Your message",
      disclaimer_1: "I've read the ",
      disclaimer_2: "privacy policy",
      disclaimer_3: " and agree to the processing of my data as outlined.",
      button: "Say hello ;)",
      success: "Message sent successfully!",
      fail: "Failed to send message!"
    }, 
    german: {
      name: "Dein Name",
      email: "Deine Email",
      message: "Deine Nachricht",
      disclaimer_1: "Ich habe die ",
      disclaimer_2: "Datenschutzerklärung",
      disclaimer_3: " gelesen und bin mit der Verarbeitung meiner Daten einverstanden.",
      button: "Absenden",
      success: "Nachricht erfolgreich gesendet!",
      fail: "Nachricht konnte nicht gesendet werden!"
    }
  }

  isEnglish = true;
  translationSubscription!: Subscription;

  constructor(private translation: TranslationService) { }

  ngOnInit() {
    AOS.init();
    this.translationSubscription = this.translation.isEnglish.subscribe(value => this.isEnglish = value);
  }

  async sendMail() {
    this.isLoading = true;

    try {
      await this.formSuccess();
    } catch (e) {
      this.formError();
    }
  }

  async formSuccess() {
    await this.fetchFormData();
    this.emptyForm();

    this.isLoading = false;
    this.isSent = true;

    setTimeout(() => {
      this.isSent = false;
    }, 1500);
  }

  formError() {
    this.emptyForm();
    this.isLoading = false;
    this.failedToSend = true;

    setTimeout(() => {
      this.failedToSend = false;
    }, 1500);
  }

  async fetchFormData() {
    const FORM_URL = 'https://devrimkoepeli.com/send_mail.php';
    const formData = new FormData();

    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('message', this.message);

    await fetch(FORM_URL, { method: 'POST', body: formData });
  }

  emptyForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.privacyPolicyAccepted = false;
  }

  toggleCheckbox() {
    if (!this.privacyPolicyAccepted) {
      this.privacyPolicyAccepted = true;
    } else {
      this.privacyPolicyAccepted = false;
    }
  }

  ngOnDestroy() {
    this.translationSubscription.unsubscribe();
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
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
      name: "Ihr Name",
      email: "Ihre Email",
      message: "Ihre Nachricht",
      disclaimer_1: "Ich habe die ",
      disclaimer_2: "Datenschutzerklärung",
      disclaimer_3: " gelesen und bin mit der Verarbeitung meiner Daten einverstanden.",
      button: "Sag Hallo ;)",
      success: "Nachricht erfolgreich gesendet!",
      fail: "Nachricht konnte nicht gesendet werden!"
    }
  }

  constructor(private translation: TranslationService) { }

  ngOnInit() {
    AOS.init();
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

  isEnglish(): boolean {
    return this.translation.isEnglish;
  }
}

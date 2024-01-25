import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  privacyPolicyAccepted: boolean = false;

  isLoading = false;
  isSent = false;
  isNameFocused = false;
  isEmailFocused = false;
  isMessageFocused = false;

  async sendMail() {
    this.isLoading = true;

    await this.fetchFormData();
    this.emptyForm();

    this.isLoading = false;
    this.isSent = true;

    setTimeout(() => {
      this.isSent = false;
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
}

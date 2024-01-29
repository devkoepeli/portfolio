import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }
}

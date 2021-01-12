import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contactForm;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      description: ['']
    });

    
  }

  submitContactForm(){
    console.log(this.contactForm.value);
    console.log(this.contactForm)
  }

}

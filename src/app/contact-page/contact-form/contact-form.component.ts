import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
const axios = require('axios');
const qs = require('qs');

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  private emailRegex = '^(([^<>()\\[\\]\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailRegex)])],
    message: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
  });

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
    // axios({
    //   method: 'post',
    //   url: '/',
    //   body: qs.stringify({
    //     'form-name': 'contactForm',
    //     'form-value': this.contactForm.value
    //   }),
    //   headers: { "Content-Type": "application/x-www-form-urlencoded"}
    // });
  }
}

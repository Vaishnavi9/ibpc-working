import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
  form = new FormGroup({
    username: new FormControl('', [Validators.required,
    Validators.minLength(3)]),
    email_name: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])

  });
  get username() {
    return this.form.get('username');
  }
  get email_name() {
    return this.form.get('email_name');
  }

  get message() {
    return this.form.get('message');
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form);
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    alert('SUCCESS!! :-)')
  }

}

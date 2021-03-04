import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  firstName = 'hello';
  lastName = '';
  email = '';
  authForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required]
  });

  constructor(private fb: FormBuilder ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.authForm);
    this.firstName = this.authForm.value.firstName;
  }
}

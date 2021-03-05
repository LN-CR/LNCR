import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  email = '';
  password = '';
  confirmPassword = '';
  oneNumber = false;
  oneLowerCaseLatter = false;
  oneUpperCaseLatter = false;
  passwordLength = false;
  latters = false;

  authForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
    confrimPassword: ['', Validators.required]
  });

  constructor(private fb: FormBuilder ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.authForm.value.password);
    console.log(typeof parseInt(this.authForm.value.password[this.authForm.value.password.length - 1], 16));

    this.email = this.authForm.value.email;
  }
  onChange(): void {

    const length = this.authForm.value.password.length;
    const lastChar = this.authForm.value.password
    [this.authForm.value.password.length - 1];
    const lowerCase = 'qwertyuioplkjhgfdsazxcvbnm';
    const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';

    if ('1234567890'.includes(lastChar) && !this.oneNumber){
      this.oneNumber = true;
    }

    if (!this.oneUpperCaseLatter && upperCase.includes(lastChar)){
      this.oneUpperCaseLatter = true;
    }

    if ( !this.oneLowerCaseLatter && lowerCase.includes(lastChar)){
      this.oneLowerCaseLatter = true;
    }

    if (!this.latters && this.oneLowerCaseLatter && this.oneUpperCaseLatter){
      this.latters = true;
    }

    if (!this.passwordLength && length > 7){
      this.passwordLength = true;
    }
  }
}

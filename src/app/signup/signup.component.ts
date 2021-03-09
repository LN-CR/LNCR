import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

const statusOfPassword = {
  active: false,
  currentLenth: 0
};


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {

  email = '';
  password = '';
  confirmPassword = '';
  oneNumber = statusOfPassword;
  oneLowerCaseLatter = statusOfPassword;
  oneUpperCaseLatter = statusOfPassword;
  passwordLength = false;
  latters = false;
  passwordConfErrMsg = false;

  authForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  constructor(private fb: FormBuilder ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    const password = this.authForm.value.password;
    const confPassword = this.authForm.value.confirmPassword;
    if (password !== confPassword) {
      this.passwordConfErrMsg = true;
    }
  }

  onChange(): void {

    const length = this.authForm.value.password.length;
    const lastChar = this.authForm.value.password
    [this.authForm.value.password.length - 1];
    const lowerCase = 'qwertyuioplkjhgfdsazxcvbnm';
    const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const numbers = '1234567890';
    this.passwordConfErrMsg = false;

    if (numbers.includes(lastChar) && !this.oneNumber.active){
      this.oneNumber = {active: true,  currentLenth: length};
    }  else if (this.oneNumber.currentLenth > length && this.oneNumber.active){
      this.oneNumber.active = false;
    }

    if (!this.oneUpperCaseLatter.active && upperCase.includes(lastChar)){
      this.oneUpperCaseLatter = {active: true,  currentLenth: length};
    } else if (this.oneUpperCaseLatter.currentLenth > length){
      this.oneUpperCaseLatter.active = false;
      this.latters =  false;
    }

    if ( !this.oneLowerCaseLatter.active && lowerCase.includes(lastChar) ){
      this.oneLowerCaseLatter = {active: true,  currentLenth: length};
    } else if (this.oneLowerCaseLatter.currentLenth > length){
      this.oneLowerCaseLatter.active = false;
      this.latters =  false;

    }

    if (!this.latters && this.oneLowerCaseLatter.active && this.oneUpperCaseLatter.active){
      this.latters =  true;
    }

    if (!this.passwordLength && length > 7){
      this.passwordLength = true;
    } else if (this.passwordLength && length < 7){
      this.passwordLength = false;
    }

  }
}

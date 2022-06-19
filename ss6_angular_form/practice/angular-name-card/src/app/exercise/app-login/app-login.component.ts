import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  login: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passWord: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get email() {
    return this.login.get('email');
  }
  get passWord() {
    return this.login.get('passWord');
  }


  constructor() { }

  ngOnInit(): void {
  }

}

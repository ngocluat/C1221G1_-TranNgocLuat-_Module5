import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  person: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordComfim: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.max(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
  }, [this.confimPassword]);


  get email() {
    return this.person.get('email');
  }

  get password() {
    return this.person.get('password');
  }

  get country() {
    return this.person.get('country');
  }

  get passwordComfim() {
    return this.person.get('passwordComfim');
  }

  get phone() {
    return this.person.get('phone');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.person);
  }


  confimPassword(confimPass: AbstractControl) {
    if (confimPass.get('password').value != confimPass.get('passwordComfim').value) {
      return {'invalid0': true};
    }
  }


}

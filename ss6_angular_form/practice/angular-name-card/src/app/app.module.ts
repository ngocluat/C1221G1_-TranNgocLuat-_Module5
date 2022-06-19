import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './practice/todo/todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormRegisterComponent } from './exercise/form-register/form-register.component';
import { AppLoginComponent } from './exercise/app-login/app-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FormRegisterComponent,
    AppLoginComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

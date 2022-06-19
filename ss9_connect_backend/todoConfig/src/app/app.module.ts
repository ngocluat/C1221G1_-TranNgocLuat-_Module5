import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EditComponent} from "./todo/edit/edit.component";
import {CraeteComponent} from "./todo/craete/craete.component";
import {TodoComponent} from "./todo/todo.component";
import { DeleteComponent } from './todo/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CraeteComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

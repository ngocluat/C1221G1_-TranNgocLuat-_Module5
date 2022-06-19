import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeCustomerComponent } from './customer/home-customer/home-customer.component';
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { CreateTransactionComponent } from './giao-dich/create-transaction/create-transaction.component';
import { HomeTransactionComponent } from './giao-dich/home-transaction/home-transaction.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeCustomerComponent,
    CreateCustomerComponent,
    CreateTransactionComponent,
    HomeTransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

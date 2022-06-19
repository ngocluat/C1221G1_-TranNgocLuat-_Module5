import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {IndexComponent} from './index/index.component';
import {HomeFuramaComponent} from './home-furama/home-furama.component';
import {HttpClientModule} from "@angular/common/http";
import {CustomerTypeComponent} from './customer-type/customer-type.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ModalComponent} from './modal/modal.component';
import {ErrorComponent} from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    HomeFuramaComponent,
    CustomerTypeComponent,
    ModalComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

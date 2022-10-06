import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {IndexComponent} from './index/index.component';
import {HomeListComponent} from './main-event/home-list/home-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {EditComponent} from './main-event/edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateComponent} from './main-event/create/create.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    HomeListComponent,
    EditComponent,
    CreateComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      NgxPaginationModule,
      HttpClientModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatPaginatorModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireStorageModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

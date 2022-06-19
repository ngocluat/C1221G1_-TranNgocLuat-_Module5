import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FacilityRoutingModule} from './facility-routing.module';
import {HomeServiceComponent} from "./home-service/home-service.component";
import {EditServiceComponent} from "./edit-service/edit-service.component";
import {CreateServiceComponent} from "./create-service/create-service.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeServiceComponent,
    EditServiceComponent,
    CreateServiceComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule {
}

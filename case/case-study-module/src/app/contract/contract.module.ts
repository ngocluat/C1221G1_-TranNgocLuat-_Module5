import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContractRoutingModule} from './contract-routing.module';
import {HomeContractComponent} from "./home-contract/home-contract.component";
import {CreateContractComponent} from "./create-contract/create-contract.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeContractComponent,
    CreateContractComponent
  ],
    imports: [
        CommonModule,
        ContractRoutingModule,
        ReactiveFormsModule
    ]
})
export class ContractModule {
}

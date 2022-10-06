import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContractComponent} from "./contract/home-contract/home-contract.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";
import {HomeFuramaComponent} from "./home-furama/home-furama.component";
import {ErrorComponent} from "./error/error.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'furama'},
  {path: 'furama', component: HomeFuramaComponent},


  {path: 'error', component: ErrorComponent},

  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

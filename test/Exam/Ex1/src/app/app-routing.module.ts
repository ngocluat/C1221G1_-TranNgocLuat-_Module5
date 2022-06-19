import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HomeTransactionComponent} from "./giao-dich/home-transaction/home-transaction.component";
import {CreateTransactionComponent} from "./giao-dich/create-transaction/create-transaction.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'estate-agent'},
  {path: 'estate-agent', component: HomeComponent},
  {path: 'transaction', component: HomeTransactionComponent},
  {path: 'create', component: CreateTransactionComponent},
  {path: 'edit/:id', component: HomeTransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

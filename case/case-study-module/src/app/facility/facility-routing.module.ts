import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeServiceComponent} from "./home-service/home-service.component";
import {CreateServiceComponent} from "./create-service/create-service.component";
import {EditServiceComponent} from "./edit-service/edit-service.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeServiceComponent},
  {path: 'create', component: CreateServiceComponent},
  {path: 'edit/:id', component: EditServiceComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule {
}

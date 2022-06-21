import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {HomeListComponent} from './main-event/home-list/home-list.component';
import {EditComponent} from './main-event/edit/edit.component';
import {CreateComponent} from './main-event/create/create.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: IndexComponent},
  {path: 'list', component: HomeListComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CraeteComponent} from "./todo/craete/craete.component";
import {TodoComponent} from "./todo/todo.component";
import {EditComponent} from "./todo/edit/edit.component";
import {DeleteComponent} from "./todo/delete/delete.component";

const routes: Routes = [
  {
    path: 'list',
    component: TodoComponent
  },
  {
    path: 'create',
    component: CraeteComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

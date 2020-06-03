import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditFormComponent} from './pages/edit-form/edit-form.component';

const routes: Routes = [
  {
    path: ':id',
    component: EditFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditFormRoutingModule { }

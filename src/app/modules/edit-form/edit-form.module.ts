import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditFormRoutingModule } from './edit-form-routing.module';
import { EditFormComponent } from './pages/edit-form/edit-form.component';


@NgModule({
  declarations: [EditFormComponent],
  imports: [
    CommonModule,
    EditFormRoutingModule
  ]
})
export class EditFormModule { }

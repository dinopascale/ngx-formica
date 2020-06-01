import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCardComponent } from './components/element-card/element-card.component';
import { ElementCardsListComponent } from './components/element-cards-list/element-cards-list.component';
import {CardFlipModule} from './card-flip/card-flip.module';
import { QuickCreationElementComponent } from './components/quick-creation-element/quick-creation-element.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ElementCardComponent, ElementCardsListComponent, QuickCreationElementComponent],
  imports: [
    CommonModule,
    CardFlipModule,
    ReactiveFormsModule
  ],
  exports: [ElementCardComponent, ElementCardsListComponent, CardFlipModule, QuickCreationElementComponent]
})
export class SharedModule { }

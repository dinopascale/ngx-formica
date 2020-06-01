import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFlipComponent } from './card-flip.component';
import { FrontSideDirective } from './directives/front-side.directive';
import { BackSideDirective } from './directives/back-side.directive';
import { FlipToDirective } from './directives/flip-to.directive';



@NgModule({
  declarations: [CardFlipComponent, FrontSideDirective, BackSideDirective, FlipToDirective],
  imports: [
    CommonModule
  ],
  exports: [FrontSideDirective, BackSideDirective, CardFlipComponent, FlipToDirective]
})
export class CardFlipModule { }

import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[formicaFlipTo]'
})
export class FlipToDirective {

  @Input() formicaFlipTo: 'back' | 'front' = 'back';
  @Output() flippedTo: EventEmitter<'back' | 'front'> = new EventEmitter<"back" | "front">();

  @HostListener('click') onClick() {
    this.flippedTo.emit(this.formicaFlipTo);
  }

  constructor() {
  }

}

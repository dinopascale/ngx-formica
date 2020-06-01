import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[formicaBackSide]'
})
export class BackSideDirective {
  constructor(public tmp: TemplateRef<any>) {}
}

import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[formicaFrontSide]'
})
export class FrontSideDirective  {
  constructor(public tmp: TemplateRef<any>) { }
}

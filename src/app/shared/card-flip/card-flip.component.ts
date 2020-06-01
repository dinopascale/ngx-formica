import {AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList} from '@angular/core';
import {FrontSideDirective} from './directives/front-side.directive';
import {BackSideDirective} from './directives/back-side.directive';
import {FlipToDirective} from './directives/flip-to.directive';
import {map} from 'rxjs/operators';

@Component({
  selector: 'formica-card-flip',
  template: `
    <div class="inner-card" [class.edit]="flipped">
      <div class="flip-card front">
        <ng-container *ngTemplateOutlet="frontTemplate"></ng-container>
      </div>
      <div class="flip-card back">
        <ng-template [ngTemplateOutlet]="backTemplate"></ng-template>
      </div>
    </div>
  `,
  styleUrls: ['./card-flip.component.sass'],
})
export class CardFlipComponent implements OnInit, AfterContentInit {

  @ContentChild(FrontSideDirective, {static: true}) private front: FrontSideDirective;
  @ContentChild(BackSideDirective, {static: true}) private back: BackSideDirective;
  @ContentChildren(FlipToDirective) private set flipTo(q: QueryList<FlipToDirective>) {
    if (q) {
      q.forEach(flip => flip.flippedTo.pipe(map(c => c === 'back')).subscribe(c => this.flipped = c))
    }
  };

  flipped: boolean = false;

  get frontTemplate() {
    return this.front.tmp;
  }

  get backTemplate() {
    return this.back.tmp;
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  flipToFront() {
    this.flipped = false;
  }

}

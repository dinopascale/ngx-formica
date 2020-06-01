import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'formica-element-cards-list',
  templateUrl: './element-cards-list.component.html',
  styleUrls: ['./element-cards-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementCardsListComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}

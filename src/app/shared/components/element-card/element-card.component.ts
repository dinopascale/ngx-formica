import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'formica-element-card',
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementCardComponent implements OnInit {

  @Input() cardName: string;
  @Input() cardDescription: string;

  constructor() { }

  ngOnInit() {
  }

}

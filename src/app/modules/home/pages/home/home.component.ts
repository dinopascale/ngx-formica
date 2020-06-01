import {Component, OnInit, ViewChild} from '@angular/core';
import {CardFlipComponent} from '../../../../shared/card-flip/card-flip.component';

const mockData = [
  {id: 1, name: 'Form #1', description: "descripting form #1 with some text"},
  {id: 2, name: 'Form #2', description: "descripting form #2 with some text"},
  {id: 3, name: 'Form #3', description: "descripting form #3 with some text"},
  {id: 4, name: 'Form #4', description: "descripting form #4 with some text"},
  {id: 5, name: 'Form #5', description: "descripting form #5 with some text"},
]

@Component({
  selector: 'formica-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  forms: {id: number, name: string, description: string}[] = mockData;
  @ViewChild(CardFlipComponent, {static: true}) cardFlip: CardFlipComponent;

  constructor() {
  }

  ngOnInit() {
  }

  add(infoForm): void {
    this.cardFlip.flipToFront();
    this.forms = [infoForm, ...this.forms]
  }

  noChanges(): void {
    this.cardFlip.flipToFront();
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCardsListComponent } from './element-cards-list.component';

describe('ElementCardsListComponent', () => {
  let component: ElementCardsListComponent;
  let fixture: ComponentFixture<ElementCardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementCardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

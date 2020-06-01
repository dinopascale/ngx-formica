import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCreationElementComponent } from './quick-creation-element.component';

describe('QuickCreationElementComponent', () => {
  let component: QuickCreationElementComponent;
  let fixture: ComponentFixture<QuickCreationElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickCreationElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickCreationElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

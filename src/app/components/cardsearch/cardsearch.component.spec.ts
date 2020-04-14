import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsearchComponent } from './cardsearch.component';

describe('CardsearchComponent', () => {
  let component: CardsearchComponent;
  let fixture: ComponentFixture<CardsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

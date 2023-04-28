import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubscriptionsComponent } from './card-subscriptions.component';

describe('CardSubscriptionsComponent', () => {
  let component: CardSubscriptionsComponent;
  let fixture: ComponentFixture<CardSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSubscriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

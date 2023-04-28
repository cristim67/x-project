import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAssetsComponent } from './card-assets.component';

describe('CardAssetsComponent', () => {
  let component: CardAssetsComponent;
  let fixture: ComponentFixture<CardAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

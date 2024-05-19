import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTypeSelectionComponent } from './travel-type-selection.component';

describe('TravelTypeSelectionComponent', () => {
  let component: TravelTypeSelectionComponent;
  let fixture: ComponentFixture<TravelTypeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelTypeSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelTypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

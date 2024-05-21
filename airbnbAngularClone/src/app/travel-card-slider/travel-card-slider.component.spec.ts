import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCardSliderComponent } from './travel-card-slider.component';

describe('TravelCardSliderComponent', () => {
  let component: TravelCardSliderComponent;
  let fixture: ComponentFixture<TravelCardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelCardSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

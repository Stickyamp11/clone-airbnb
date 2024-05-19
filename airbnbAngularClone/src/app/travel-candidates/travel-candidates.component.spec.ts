import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCandidatesComponent } from './travel-candidates.component';

describe('TravelCandidatesComponent', () => {
  let component: TravelCandidatesComponent;
  let fixture: ComponentFixture<TravelCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelCandidatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

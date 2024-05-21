import { Component } from '@angular/core';
import { TravelCardSliderComponent } from '../travel-card-slider/travel-card-slider.component';

@Component({
  selector: 'app-travel-card',
  standalone: true,
  imports: [TravelCardSliderComponent],
  templateUrl: './travel-card.component.html',
  styleUrl: './travel-card.component.scss'
})
export class TravelCardComponent {

}

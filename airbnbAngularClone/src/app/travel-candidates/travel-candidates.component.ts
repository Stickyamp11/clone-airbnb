import { Component } from '@angular/core';
import { TravelTypeSelectionComponent } from '../travel-type-selection/travel-type-selection.component';
import { CommonModule } from '@angular/common';
import { TravelCardComponent } from '../travel-card/travel-card.component';

@Component({
  selector: 'app-travel-candidates',
  standalone: true,
  imports: [TravelTypeSelectionComponent,CommonModule,TravelCardComponent],
  templateUrl: './travel-candidates.component.html',
  styleUrl: './travel-candidates.component.scss'
})
export class TravelCandidatesComponent {

}

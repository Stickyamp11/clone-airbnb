import { Component } from '@angular/core';
import { TravelTypeSelectionComponent } from '../travel-type-selection/travel-type-selection.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-travel-candidates',
  standalone: true,
  imports: [TravelTypeSelectionComponent,CommonModule],
  templateUrl: './travel-candidates.component.html',
  styleUrl: './travel-candidates.component.scss'
})
export class TravelCandidatesComponent {

}

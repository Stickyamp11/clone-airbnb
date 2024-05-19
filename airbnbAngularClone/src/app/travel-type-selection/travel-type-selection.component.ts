import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-type-selection',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './travel-type-selection.component.html',
  styleUrl: './travel-type-selection.component.scss'
})
export class TravelTypeSelectionComponent {

}

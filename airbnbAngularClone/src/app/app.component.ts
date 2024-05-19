import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { TravelCandidatesComponent } from './travel-candidates/travel-candidates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderNavbarComponent,TravelCandidatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'airbnbAngularClone';
}

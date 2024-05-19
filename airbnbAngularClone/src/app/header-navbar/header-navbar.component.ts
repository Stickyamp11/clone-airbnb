import { Component } from '@angular/core';
import { HeaderSearchbarComponent } from '../header-searchbar/header-searchbar.component';
import { HeaderUserComponent } from '../header-user/header-user.component';
import { HeaderHoverEffectDirective } from '../header-hover-effect.directive';

@Component({
  selector: 'app-header-navbar',
  standalone: true,
  imports: [HeaderSearchbarComponent,HeaderUserComponent,HeaderHoverEffectDirective],
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.scss'
})
export class HeaderNavbarComponent {

}

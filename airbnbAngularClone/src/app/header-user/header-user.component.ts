import { Component } from '@angular/core';
import { HeaderHoverEffectDirective } from '../header-hover-effect.directive';

@Component({
  selector: 'app-header-user',
  standalone: true,
  imports: [HeaderHoverEffectDirective],
  templateUrl: './header-user.component.html',
  styleUrl: './header-user.component.scss'
})
export class HeaderUserComponent {

}

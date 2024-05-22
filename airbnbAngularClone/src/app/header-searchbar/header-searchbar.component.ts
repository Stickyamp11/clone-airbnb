import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-header-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './header-searchbar.component.html',
  styleUrl: './header-searchbar.component.scss'
})
export class HeaderSearchbarComponent {
  mobileView: Signal<boolean> = computed(() => this.windowSizeSig() < 730 ? true : false);
  windowSizeSig: WritableSignal<number> = signal(0);
  resizeSubscription$: Observable<number> = fromEvent(window, 'resize')
  .pipe(
    debounceTime(100),
    map((event: Event) => (event.target as Window).innerWidth),
    distinctUntilChanged()
  );
  ngAfterViewInit(){
    this.windowSizeSig.update(_ => window.innerWidth);
  }
  ngOnInit(){
    this.resizeSubscription$.subscribe(value => {
      this.windowSizeSig.update(_ => value)
    })
  }
}

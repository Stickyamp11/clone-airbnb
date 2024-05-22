import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef,OnInit, Signal, ViewChild, WritableSignal, computed, signal } from '@angular/core';
import { Observable,debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { StrongTextHoverEffectDirective } from '../strong-text-hover-effect.directive';
type SelectionInterface = {
  url: string,
  text: string,
  selected: boolean,
  id: number
}
@Component({
  selector: 'app-travel-type-selection',
  standalone: true,
  imports: [CommonModule,NgFor, NgIf, NgClass, StrongTextHoverEffectDirective],
  templateUrl: './travel-type-selection.component.html',
  styleUrl: './travel-type-selection.component.scss'
})
export class TravelTypeSelectionComponent implements OnInit, AfterViewInit {
  mobileView: Signal<boolean> = computed(() => this.windowSizeSig() < 600 ? true : false);
  selectionItems: SelectionInterface[] = [
    {url: "https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png", text: "Iconos", selected: true, id: 1 },
    {url: "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg", text: "Iconos", selected: false, id: 2 },
    {url: "https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg", text: "Iconos", selected: false, id: 3 },
    {url: "https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg", text: "Iconos", selected: false, id: 4 },
    {url: "https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg", text: "Iconos", selected: false, id: 5 },
    {url: "https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg", text: "Iconos", selected: false, id: 6 },
    {url: "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg", text: "Iconos", selected: false, id: 7 },
    {url: "https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg", text: "Iconos", selected: false, id: 8 },
    {url: "https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg", text: "Iconos", selected: false, id: 9 },
    {url: "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg", text: "Iconos", selected: false, id: 10 },
    {url: "https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg", text: "Iconos", selected: false, id: 11 },
    {url: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg", text: "Iconos", selected: false, id: 12 },
    {url: "https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png", text: "Iconos", selected: false, id: 13 },
    {url: "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg", text: "Iconos", selected: false, id: 14 },
    {url: "https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg", text: "Iconos", selected: false, id: 15 },
    {url: "https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg", text: "Iconos", selected: false, id: 16 },
    {url: "https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg", text: "Iconos", selected: false, id: 17 },
    {url: "https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg", text: "Iconos", selected: false, id: 18 },
    {url: "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg", text: "Iconos", selected: false, id: 19 },
    {url: "https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg", text: "Iconos", selected: false, id: 20 },
    {url: "https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg", text: "Iconos", selected: false, id: 21 },
    {url: "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg", text: "Iconos", selected: false, id: 22 },
    {url: "https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg", text: "Iconos", selected: false, id: 23 },
    {url: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg", text: "Iconos", selected: false, id: 24 }]
  currentIndex: number = 0;
  windowSizeSig: WritableSignal<number> = signal(0);
  hiddenNumberOfItemsSig: WritableSignal<number> = signal(0);
  resizeSubscription$: Observable<number> = fromEvent(window, 'resize')
  .pipe(
    debounceTime(100),
    map((event: Event) => (event.target as Window).innerWidth),
    distinctUntilChanged()
  );

  @ViewChild('iconButtons') iconButtons!: ElementRef;

  ngOnInit(){
    this.resizeSubscription$.subscribe(value => {
      console.log("value",value);
      this.windowSizeSig.update(_ => value)
      this.hiddenNumberOfItemsSig.update(_ => this.getHiddenItems());
      console.log("signal",this.windowSizeSig());
      console.log("hidden", this.hiddenNumberOfItemsSig());
    })
  }
  ngAfterViewInit(){
    this.windowSizeSig.update(_ => window.innerWidth);
    this.hiddenNumberOfItemsSig.update(_ => this.getHiddenItems());
  }

  getHiddenItems(): number{
    const iconButtonsEl = this.iconButtons.nativeElement;
      const slideWidth = iconButtonsEl.children[0].offsetWidth;
      const visibleWidth = iconButtonsEl.offsetWidth;
      const totalWidth = iconButtonsEl.scrollWidth;
      const maxScrollPosition = totalWidth - visibleWidth;
      return Math.ceil(maxScrollPosition / slideWidth);
  }

  isFirstIndex(): boolean{
    return this.currentIndex == 0;
  }
  isLastIndex(): boolean{
    console.log(this.currentIndex,"alo");
    return this.currentIndex == this.hiddenNumberOfItemsSig();
  }

  goToNextIcon(){
    if(!(this.currentIndex == this.hiddenNumberOfItemsSig())){
      this.currentIndex = this.currentIndex + 1;
      this.scrollToCurrentIcon();
    }
  }
  goToPreviousIcon(){
    if(!(this.currentIndex == 0))
      {
        this.currentIndex = this.currentIndex - 1;
        this.scrollToCurrentIcon();
      }
  }

  scrollToCurrentIcon() {
    const iconButtonsEl = this.iconButtons.nativeElement;
    const slideWidth = iconButtonsEl.children[0].offsetWidth;
    const visibleWidth = iconButtonsEl.offsetWidth;
    const totalWidth = iconButtonsEl.scrollWidth;

    const maxScrollPosition = totalWidth - visibleWidth;

    let newScrollPosition = slideWidth * this.currentIndex;

    if (newScrollPosition > maxScrollPosition) {
        newScrollPosition = maxScrollPosition;

    }
    iconButtonsEl.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  }

  selectTravelType(i: SelectionInterface){
    let selectedItem = this.selectionItems.find(el => el.id == i.id);
    if (selectedItem) {
      this.selectionItems.forEach(el => el.selected = false);
      selectedItem.selected = true;
    }
  }
  isTravelSelected(i: SelectionInterface){
    return i.selected;
  }

}

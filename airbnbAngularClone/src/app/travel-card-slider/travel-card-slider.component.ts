import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
type SlideInterface = {
  imgUrl: string
}
@Component({
  selector: 'app-travel-card-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel-card-slider.component.html',
  styleUrl: './travel-card-slider.component.scss'
})
export class TravelCardSliderComponent {
  @ViewChild('slider') slider!: ElementRef;

  slides: SlideInterface[] = [
    {imgUrl: `../../assets/img${Math.floor(Math.random() * 12) + 1}.png`},
    {imgUrl: `../../assets/img${Math.floor(Math.random() * 12) + 1}.png`},
    {imgUrl: `../../assets/img${Math.floor(Math.random() * 12) + 1}.png`},
    {imgUrl: `../../assets/img${Math.floor(Math.random() * 12) + 1}.png`}
  ];
  currentIndex: number = 0;

  getSlideUrl(i: number): string {
    return `url('${this.slides[i].imgUrl}')`;
  }

  isSlideActive(index: number){
    return index == this.currentIndex;
  }


  goToNextSlide(){
    this.currentIndex = this.currentIndex == this.slides.length - 1 ? this.currentIndex : this.currentIndex + 1;
    this.scrollToCurrentSlide();
  }

  goToPreviousSlide(){
    this.currentIndex = this.currentIndex == 0 ? this.currentIndex : this.currentIndex - 1;
    this.scrollToCurrentSlide();
  }


  scrollToCurrentSlide() {
    const sliderEl = this.slider.nativeElement;
    const slideWidth = sliderEl.children[0].offsetWidth;
    sliderEl.scrollTo({
      left: slideWidth * this.currentIndex,
      behavior: 'smooth'
    });
  }

}

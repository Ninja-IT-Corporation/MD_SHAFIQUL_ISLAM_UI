import { Component } from '@angular/core';
import { BANNER } from 'src/app/core/db/home.banner.db';

@Component({
  selector: 'app-nj-carousel',
  templateUrl: './nj-carousel.component.html',
  styleUrls: ['./nj-carousel.component.scss']
})

export class NjCarouselComponent {
  constructor() { }

  banners = BANNER;
  count:number = 1;
  isStatic: boolean = false;

  ngOnInit(){
    
    setInterval(() => {
      // Your logic here
      this.showSlider('next')
      
    }, 5000);
  }

  showSlider(type: string) {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const carousel = document.querySelector('.carousel');
    const listHTML = document.querySelector('.carousel .list');

    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('prev', 'next');

    const items = document.querySelectorAll('.carousel .list .item');

    if (type === 'next') {
      listHTML.appendChild(items[0]);
      carousel.classList.add('next');
      if(this.count+1 < this.banners.length){
        this.count += 1;
      }else{
        this.count = 0;
      }
      this.isStatic = this.banners[this.count].isStatic;
      
    } else {
      const positionLast = items.length - 1;
      listHTML.prepend(items[positionLast]);
      carousel.classList.add('prev');
      if(this.count-1 >= 0){
        this.count -= 1;
      }else{
        this.count = 4;
      }
      this.isStatic = this.banners[this.count].isStatic;
    }

    let unAcceptClick;
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
      nextButton.style.pointerEvents = 'auto';
      prevButton.style.pointerEvents = 'auto';
    }, 200);
  }
  
}

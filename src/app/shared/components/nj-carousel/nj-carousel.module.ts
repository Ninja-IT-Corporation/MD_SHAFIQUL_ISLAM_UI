import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NjCarouselComponent } from './nj-carousel.component';



@NgModule({
  declarations: [
    NjCarouselComponent
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    NjCarouselComponent
  ]
})
export class NjCarouselModule { }

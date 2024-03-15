import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurGalleryComponent } from './our-gallery/our-gallery.component';
import { GalleryComponent } from './our-gallery/gallery/gallery.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PagesComponent, AboutUsComponent, OurProductsComponent, ContactUsComponent, OurGalleryComponent, GalleryComponent],
  imports: [CommonModule, PagesRoutingModule, HeaderModule, FooterModule, RouterModule],
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurGalleryComponent } from './our-gallery/our-gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurProductsComponent } from './our-products/our-products.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'gallery',
        component: OurGalleryComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'our-products',
        component: OurProductsComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

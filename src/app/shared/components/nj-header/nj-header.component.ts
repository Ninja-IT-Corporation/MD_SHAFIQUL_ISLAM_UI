import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nj-header',
  templateUrl: './nj-header.component.html',
  styleUrls: ['./nj-header.component.scss']
})
export class NjHeaderComponent {
 sideShow = false;
  constructor(private elementRef: ElementRef) {}

  showSidebar() {
    // const sidebar = this.elementRef.nativeElement.querySelector('.sidebar');
    // sidebar.style.display = 'flex';
    this.sideShow = !this.sideShow;
  }

  hideSidebar() {
    this.sideShow = !this.sideShow;
    // const sidebar = this.elementRef.nativeElement.querySelector('.sidebar');
    // sidebar.style.display = 'none';
  }

}

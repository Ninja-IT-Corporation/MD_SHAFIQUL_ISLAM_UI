import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('headerSidebar') headerSidebar: HeaderSidebarComponent;
  scrolled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
  
  /**
   * HEADER SIDEBAR OPEN FUNCTION
   * onHeaderSidebarOpen()
  */
  onHeaderSidebarOpen() {
    this.headerSidebar.onHeaderSideBar();
  }
}

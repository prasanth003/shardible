import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'shardible-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isSticky = false;
  public navbarOpen = false;

  constructor() { }

  @HostListener("window:scroll", [])
  public onWindowScroll() {
    this.isSticky = window.pageYOffset >= 120;
  }

  public ngOnInit(): void {
  }

  public toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}

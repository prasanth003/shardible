import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'shardible-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public backgroundPosition: number = 0;

  constructor() { }
  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.backgroundPosition = (window.pageYOffset / 10) * 80;
  }

  public ngOnInit(): void {
  }
}

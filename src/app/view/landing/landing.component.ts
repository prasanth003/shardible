import { Component, HostListener, OnInit } from '@angular/core';
import { landingDetails } from 'src/app/contents/landing-page.content';
import { iLandingDetails } from 'src/app/interface/landing.interface';

@Component({
  selector: 'shardible-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public backgroundPosition: number = 0;

  public landingDetails: iLandingDetails = landingDetails;

  constructor() { }
  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.backgroundPosition = (window.pageYOffset / 10) * 80;
  }

  public ngOnInit(): void {
  }
}

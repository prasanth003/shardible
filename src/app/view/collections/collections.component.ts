import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'shardible-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  
  public sectionHeight: number = 200;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 250,
    animateIn: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      1000: {
        items: 4
      }
    },
    nav: false
  }

  constructor() { }

  /* Listing on window resize */
  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    const navbarHeight = 70;
    const spacing = 0;
    const availableHeight = window.innerHeight - (navbarHeight + spacing);
    this.sectionHeight = availableHeight;
  }

  ngOnInit(): void {
  }

}

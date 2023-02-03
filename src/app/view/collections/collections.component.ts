import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { iCollection } from 'src/app/interface/collection.interface';

@Component({
  selector: 'shardible-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  
  public sectionHeight: number = 200;

  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 3000,
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

  public collections: iCollection[] = [
    {
      thumbnail: 'sliderimg1.png',
      author: {
        title: 'Krill',
        name: 'MAWC',
        thumb: 'Ellipse 6.png'
      },
      price: '80 SHM',
      bidRate: '7.59 wSHM'
    },
    {
      thumbnail: 'sliderimg2.png',
      author: {
        title: 'Jellyfish',
        name: 'MAWC',
        thumb: 'Ellipse 6.png'
      },
      price: '80 SHM',
      bidRate: '7.59 wSHM'
    },
    {
      thumbnail: 'sliderimg3.png',
      author: {
        title: 'Geoduck',
        name: 'MAWC',
        thumb: 'Ellipse 6.png'
      },
      price: '80 SHM',
      bidRate: '7.59 wSHM'
    },
    {
      thumbnail: 'sliderimg4.png',
      author: {
        title: 'Sedna',
        name: 'MAWC',
        thumb: 'Ellipse 6.png'
      },
      price: '80 SHM',
      bidRate: '7.59 wSHM'
    },
    {
      thumbnail: 'sliderimg5.png',
      author: {
        title: 'Namora',
        name: 'MAWC',
        thumb: 'Ellipse 6.png'
      },
      price: '80 SHM',
      bidRate: '7.59 wSHM'
    },
    {
      thumbnail: 'sliderimg6.png',
      author: {
        title: 'Marrina Smallwood',
        name: 'MAWC',
        thumb: 'Ellipse 6.png'
      },
      price: '80 SHM',
      bidRate: '7.59 wSHM'
    },
    {
      thumbnail: 'sliderimg10.png',
      author: {
        title: 'Stingray',
        name: 'MAWC',
        thumb: 'Ellipse 6.png'
      },
      price: '80 SHM',
      bidRate: '7.59 wSHM'
    }
  ] 

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

import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { collectionContents, collections } from 'src/app/contents/collections.content';
import { iCollection, iCollectionContent } from 'src/app/interface/collection.interface';

@Component({
  selector: 'shardible-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

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

  public collections: iCollection[] = collections;
  public content: iCollectionContent = collectionContents;

  constructor() { }

  ngOnInit(): void {
  }

}

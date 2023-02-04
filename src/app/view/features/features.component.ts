import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'shardible-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    document.querySelector('menuBtn')?.classList.toggle('open');
  }

}

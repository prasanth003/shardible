import { Component, OnInit } from '@angular/core';
import { abouts } from 'src/app/contents/about.content';
import { iAbout } from 'src/app/interface/about.interface';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public aboutContent: iAbout[] = abouts;

  constructor() { }

  ngOnInit(): void {
  }

}

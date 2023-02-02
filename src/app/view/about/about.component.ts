import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public sectionHeight: number = 200;

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

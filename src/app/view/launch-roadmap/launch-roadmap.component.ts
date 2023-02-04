import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'launch-roadmap',
  templateUrl: './launch-roadmap.component.html',
  styleUrls: ['./launch-roadmap.component.scss']
})
export class LaunchRoadmapComponent implements OnInit {

  public loaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()  => {
      this.loaded = true
    }, 5000);
  }

}

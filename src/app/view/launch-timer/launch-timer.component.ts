import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'launch-timer',
  templateUrl: './launch-timer.component.html',
  styleUrls: ['./launch-timer.component.scss']
})
export class LaunchTimerComponent implements OnInit {

  public days!: number;
  public hours!: number;
  public minutes!: number;
  public seconds!: number;
  public daysStroke!: number;
  public hoursStroke!: number;
  public minutesStroke!: number;
  public secondsStroke!: number;
  public endDate = new Date('03/03/2023 00:00:00').getTime();
  
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = this.endDate - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / (1000));

      this.daysStroke = 565 - (565 * this.days) / 365;
      this.hoursStroke = 565 - (565 * this.hours) / 24;
      this.minutesStroke = 565 - (565 * this.minutes) / 60;
      this.secondsStroke = 565 - (565 * this.seconds) / 60;

    }, 1000);
  }

}

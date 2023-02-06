import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'shardible-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public show: boolean = false;

  @HostListener('window:scroll') onScroll(e: Event): void {
    let scorllNumber: number = this.getYPosition(e);
    if (scorllNumber > 2000) {
      setTimeout(() => {
        this.show = true;
      }, 200);
    }
  }
  
  constructor() { }

  public ngOnInit(): void {
  }

  public getYPosition(e: Event): number {
    return  window.scrollY;
  }

}

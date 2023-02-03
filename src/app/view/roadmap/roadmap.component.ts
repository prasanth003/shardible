import { Component, ElementRef, OnDestroy, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { iRoadMap } from 'src/app/interface/roadmap.interface';

@Component({
  selector: 'roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit, AfterViewInit, OnDestroy {

  private items!: NodeListOf<Element>;
  private observer!: IntersectionObserver;

  public roadmapList: iRoadMap[] = [
    {
      name: 'Phase 1 - Jan 2023',
      time: new Date('Janaury 01, 2023'),
      points: [
        'Create Artwork - Mutant Aquatic Warriors Club  (MAWC) NFTs',
        'Shardible Website Development',
        'Community Building',
        'Marketing Campaigns',
        'Shardible Landing Page Launch'
      ]
    },
    {
      name: 'Phase 2  - Feb 2023',
      time: new Date('Feb 01, 2023'),
      points: [
        'Mutant Aquatic Warriors Club  (MAWC) NFTs Sale',
        'Marketing Campaigns',
        'Alpha Testnet Launch',
        'Community Building'
      ]
    },
    {
      name: 'Phase 3  - Mar - April 2023',
      time: new Date('Apr 01, 2023'),
      points: [
        'Shardible Beta Live - Mainnet',
        'Marketing Campaigns',
        'NFT Holder- Percentage Share Disbursal Start',
        'Community Building'
      ]
    },
    {
      name: 'Phase 4  - May 2023',
      time: new Date('May 01, 2023'),
      points: [
        'Develop JS APIs/SDKs',
        'Create Shardible Custom Store Platform Update',
        'Community Building'
      ]
    }
  ]

  constructor(
    private el: ElementRef, private renderer: Renderer2
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.items = this.el.nativeElement.querySelectorAll('.timeline li');
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.firstElementChild?.className) {
            this.renderer.addClass(entry.target, 'in-view');
          }
        }
      });
    });
    this.observeElements();
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  private observeElements() {
    this.items.forEach(item => {
      this.observer.observe(item);
    });
  }

  /**
   * is the timeline achived
   * @param date Date
  */
  public isAchived(date: Date): boolean {
    if (date.getTime() < new Date().getTime()) return true;
    return false;
  }
}

import { Component, ElementRef, OnDestroy, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { roadMap } from 'src/app/contents/roadmap.content';
import { iRoadMap } from 'src/app/interface/roadmap.interface';

@Component({
  selector: 'roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit, AfterViewInit, OnDestroy {

  private items!: NodeListOf<Element>;
  private observer!: IntersectionObserver;

  public roadmapList: iRoadMap[] = roadMap;

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

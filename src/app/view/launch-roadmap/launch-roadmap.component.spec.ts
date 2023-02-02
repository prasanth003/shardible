import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchRoadmapComponent } from './launch-roadmap.component';

describe('LaunchRoadmapComponent', () => {
  let component: LaunchRoadmapComponent;
  let fixture: ComponentFixture<LaunchRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchRoadmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

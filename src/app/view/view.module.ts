import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CollectionsComponent } from './collections/collections.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { LaunchRoadmapComponent } from './launch-roadmap/launch-roadmap.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CollectionsCardComponent } from './collections/collections-card/collections-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturesComponent } from './features/features.component';
import { LaunchTimerComponent } from './launch-timer/launch-timer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ViewComponent,
    HeaderComponent,
    AboutComponent,
    CollectionsComponent,
    RoadmapComponent,
    LaunchRoadmapComponent,
    PartnersComponent,
    FooterComponent,
    LandingComponent,
    CollectionsCardComponent,
    FeaturesComponent,
    LaunchTimerComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    CarouselModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ViewModule { }

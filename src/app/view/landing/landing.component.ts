import { AfterViewInit, Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { landingDetails } from 'src/app/contents/landing-page.content';
import { iLandingDetails } from 'src/app/interface/landing.interface';

@Component({
  selector: 'shardible-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {

  public backgroundPosition: number = 0;
  public landingDetails: iLandingDetails = landingDetails;
  public width: number = 150;
  public email: string = "";

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9][-a-z0-9._]+@([-_a-z0-9]+[.])+[a-z]{2,5}$')])
  });

  constructor() { }
  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.backgroundPosition = (window.pageYOffset / 10) * 80;
  }

  public ngAfterViewInit(): void {
    let buttonWidth: number | undefined = document.getElementById('joinBtn')?.clientWidth;
    this.width = buttonWidth ? (buttonWidth + 20) : 150;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  public joinWhitelist(): void {
    // if (this.email) {
    //   let peoples: string[] = this.getPeoples();
    //   peoples.push(this.email);
    //   localStorage.setItem('peoples', JSON.stringify(peoples));
    //   this.email = "";
    // }
  }


  public getPeoples(): string[] {
    let parsedString: string | null = localStorage.getItem('peoples');
    if (parsedString) {
      return JSON.parse(parsedString)
    } else {
      return []
    }
  }
}

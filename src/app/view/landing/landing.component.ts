import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { landingDetails } from 'src/app/contents/landing-page.content';
import { DataService } from 'src/app/controller/data.service';
import { iLandingDetails } from 'src/app/interface/landing.interface';

@Component({
  selector: 'shardible-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit, OnDestroy {

  public backgroundPosition: number = 0;
  public landingDetails: iLandingDetails = landingDetails;
  public width: number = 150;
  public totalUsers: number = 0;

  private interval: any;

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9][-a-z0-9._]+@([-_a-z0-9]+[.])+[a-z]{2,5}$')])
  });

  constructor(private data: DataService) {
    this.interval = setInterval(() => {
      this.getPeoples();
    }, 5000);
  }

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
    if (this.form.valid) {
      this.data.registerEmail(this.form.value['email']).subscribe({
        next: (res: any) => {
          console.log('res', res);
          this.form.patchValue({ 'email': '' });
        }
      });
    }
  }


  private getPeoples(): void {
    this.data.getRegisterUsers().subscribe({
      next: (res: any) => {
        console.log('res', res);
      }
    })
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}

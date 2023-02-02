import { Component, OnInit } from '@angular/core';
import { faTwitter, faDiscord, faLinkedinIn, faFacebook, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { iSocialIcons } from 'src/app/interface/social-icons.interface';


@Component({
  selector: 'shardible-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public scoialIcons: iSocialIcons[] = [
    {
      icon: faTwitter,
      link: ''
    },
    {
      icon: faDiscord,
      link: ''
    },
    {
      icon: faLinkedinIn,
      link: ''
    },
    {
      icon: faFacebook,
      link: ''
    },
    {
      icon: faTelegram,
      link: ''
    },
    {
      icon: faInstagram,
      link: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faTwitter, faDiscord, faLinkedinIn, faFacebook, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { quickLinks } from 'src/app/contents/quickLinks.content';
import { socialLinks } from 'src/app/contents/social-icons.content';
import { iQuickLinks } from 'src/app/interface/quick-links.interface';
import { iSocialIcons } from 'src/app/interface/social-icons.interface';


@Component({
  selector: 'shardible-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public scoialIcons: iSocialIcons[] = socialLinks;
  public quickLinks: iQuickLinks[] = quickLinks;

  constructor() { }

  ngOnInit(): void {
  }

}

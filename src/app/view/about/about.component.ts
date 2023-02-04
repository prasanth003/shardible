import { Component, HostListener, OnInit } from '@angular/core';
import { faArrowRightArrowLeft, faCloudBolt, faStore } from '@fortawesome/free-solid-svg-icons';
import { iAbout } from 'src/app/interface/about.interface';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public sectionHeight: number = 200;

  public aboutContent: iAbout[] = [
    {
      icon: faArrowRightArrowLeft,
      name: 'P2P Marketplace',
      description: 'Shardible is a modern decentralized NFT marketplace where people can easily buy and sell any NFT tokens. Our team implements all smart contracts with a passion for safety and a decentralization spirit. All listings, bids and transfers occur on our unique smart contract on a chain so users can be sure that their funds and NFTs are safe and secure.'
    },
    {
      icon: faCloudBolt,
      name: 'SaaS for NFT Projects',
      description: 'NFT smart contract factory, minting and token gating are just a part of Shardible. The platform provides comprehensive functionality and a set of tools which help creators, artists, and developers start their NFT projects. Our mission is to simplify NFT creation and enable it for everyone,'
    },
    {
      icon: faStore,
      name: 'NFT Primary Market ',
      description: 'Create your own NFT store, schedule a launch, and promote your project through various promotion tools provided by the platform: store landing page, event calendar, pre-sales, featured projects, statistics, and analytics.  '
    }
  ];

  constructor() { }

  /* Listing on window resize */
  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    const navbarHeight = 70;
    const spacing = 0;
    const availableHeight = window.innerHeight - (navbarHeight + spacing);
    this.sectionHeight = availableHeight;
  }

  ngOnInit(): void {
  }

}

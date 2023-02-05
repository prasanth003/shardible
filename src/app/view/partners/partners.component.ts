import { Component, OnInit } from '@angular/core';
import { partners } from 'src/app/contents/partners.content';
import { iPartners } from 'src/app/interface/partners.interface';

@Component({
  selector: 'shardible-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  public partners: iPartners[] = partners;

  constructor() { }

  ngOnInit(): void {
  }

}

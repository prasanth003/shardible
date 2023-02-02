import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'shardible-collections-card',
  templateUrl: './collections-card.component.html',
  styleUrls: ['./collections-card.component.scss']
})
export class CollectionsCardComponent implements OnInit {

  public moreIcon =  faEllipsisV;

  constructor() { }

  ngOnInit(): void {
  }

}

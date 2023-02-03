import { Component, Input, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { iCollection } from 'src/app/interface/collection.interface';

@Component({
  selector: 'shardible-collections-card',
  templateUrl: './collections-card.component.html',
  styleUrls: ['./collections-card.component.scss']
})
export class CollectionsCardComponent implements OnInit {

  public moreIcon =  faEllipsisV;
  @Input() collection!: iCollection;

  constructor() { }

  ngOnInit(): void {
  }

}

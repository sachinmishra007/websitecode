import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-skeleton',
  templateUrl: './youtube-skeleton.component.html',
  styleUrls: ['./youtube-skeleton.component.scss']
})
export class YoutubeSkeletonComponent implements OnInit {

  constructor() { }
  cards=[
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "Item5",
    "Item6",
    "Item7",
    "Item8",
    "Item9",
    "Item10",
    "Item11",
    "Item12",
    "Item13",
    "Item14",
    "Item15",
    "Item16",
  ];
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']

})
export class RootComponent implements OnInit {
  details: any
  constructor(
    private _acr: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._acr.data.subscribe((_res) => {
      this.details = _res.data;
    })
  }

}

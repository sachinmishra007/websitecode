import { Component, InjectionToken, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    debugger;
    const BASE_URL = new InjectionToken<string>('BaseUrl');
    const injector =

      Injector.create({ providers: [{ provide: BASE_URL, useValue: 'http://localhost' }] });
    const url = injector.get(BASE_URL);
    // here `url` is inferred to be `string` because `BASE_URL` is `InjectionToken<string>`.
  }

}

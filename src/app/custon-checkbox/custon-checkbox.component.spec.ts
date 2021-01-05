import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustonCheckboxComponent } from './custon-checkbox.component';

describe('CustonCheckboxComponent', () => {
  let component: CustonCheckboxComponent;
  let fixture: ComponentFixture<CustonCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustonCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustonCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

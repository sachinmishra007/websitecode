import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSkeletonComponent } from './youtube-skeleton.component';

describe('YoutubeSkeletonComponent', () => {
  let component: YoutubeSkeletonComponent;
  let fixture: ComponentFixture<YoutubeSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

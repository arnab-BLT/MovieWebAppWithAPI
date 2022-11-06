import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoembadeComponent } from './videoembade.component';

describe('VideoembadeComponent', () => {
  let component: VideoembadeComponent;
  let fixture: ComponentFixture<VideoembadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoembadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoembadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

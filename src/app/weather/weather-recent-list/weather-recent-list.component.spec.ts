import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherRecentListComponent } from './weather-recent-list.component';

describe('WeatherRecentListComponent', () => {
  let component: WeatherRecentListComponent;
  let fixture: ComponentFixture<WeatherRecentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherRecentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherRecentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

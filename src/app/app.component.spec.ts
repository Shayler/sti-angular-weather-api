import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { WeatherRecentListComponent } from './weather/weather-recent-list/weather-recent-list.component';
import { WeatherForecastComponent } from './weather/weather-forecast/weather-forecast.component';
import { WeatherService } from './weather/shared/weather.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WeatherSearchComponent,
        WeatherRecentListComponent,
        WeatherForecastComponent
      ],
      imports: [ReactiveFormsModule],
      providers:[WeatherService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render WeatherSearchComponent', () => {
    const fixture = TestBed.createComponent(WeatherSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.componentInstance;
    expect(compiled).toBeTruthy();
  });

  it('should render WeatherRecentListComponent', () => {
    const fixture = TestBed.createComponent(WeatherRecentListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.componentInstance;
    expect(compiled).toBeTruthy();
  });

  it('should render WeatherForecastComponent', () => {
    const fixture = TestBed.createComponent(WeatherForecastComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.componentInstance;
    expect(compiled).toBeTruthy();
  });
});

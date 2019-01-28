import { Component } from '@angular/core';

import { ForecastResponse } from './weather/shared/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-open-weather-map';
  currForecast: ForecastResponse | null;

  selectedForecast(forecast: ForecastResponse) {
    this.currForecast = forecast;
  }
}

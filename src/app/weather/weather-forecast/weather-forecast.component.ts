import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadWeather } from '../store/weather.actions';
import { ForecastResponse } from '../shared/weather.model';
import { WeatherState } from '../store/weather.reducer';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  @Input() forecast: ForecastResponse;

  constructor(private store: Store<WeatherState>) { }

  ngOnInit() {
  }

  updateCity(cityId: string) {
    this.store.dispatch(new LoadWeather({cityId}));
  }
}
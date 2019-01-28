import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ForecastResponse } from '../shared/weather.model';
import { WeatherState } from '../store/weather.reducer';
import { getRecentForecasts } from 'src/app/reducers';
import { RemoveWeather, LoadWeather } from '../store/weather.actions';

@Component({
  selector: 'app-weather-recent-list',
  templateUrl: './weather-recent-list.component.html',
  styleUrls: ['./weather-recent-list.component.scss']
})
export class WeatherRecentListComponent implements OnInit {

  recentForecasts$: Observable<ForecastResponse[]>;

  @Output() public onSelect: EventEmitter<ForecastResponse> = new EventEmitter();

  constructor(private store: Store<WeatherState>) { }

  ngOnInit() {

    this.recentForecasts$ = this.store.pipe(select(getRecentForecasts));
  }

  selectForecast(forecast: ForecastResponse) {
    this.onSelect.emit(forecast);
  }

  removeCity(cityId: string) {
    this.store.dispatch(new RemoveWeather({ cityId }));
  }

  updateCity(cityId: string) {
    this.store.dispatch(new LoadWeather({ cityId }));
  }
}
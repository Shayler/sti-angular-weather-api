import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { CitySearchResult, ForecastResponse } from './weather.model';

@Injectable()
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  params = {
    q: '',
    cnt: '',
    units: 'metric',
    APPID: 'c51223c219d6aec8cb8c5210449bd859'
  };

  constructor(private http: HttpClient) { }

  // Use the supplied string to search for cities to choose from
  searchCity(searchStr: string) {
    const params: { [key: string]: string } = {
      ...this.params,
      q: searchStr,
      cnt: '10'
    };
    return this.http.get<CitySearchResult[]>(this.url + 'find', { params }).pipe(
      map(results => results['list']));
  }

  loadWeather(cityId: string) {
    const params: { [key: string]: string } = {
      ...this.params,
      id: cityId,
      cnt: '5'
    };
    return this.http.get<ForecastResponse>(this.url + 'forecast/daily', { params }).pipe(
      map(res => res));
  }
}

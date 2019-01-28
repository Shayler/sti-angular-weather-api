import { Action } from '@ngrx/store';

import { ForecastResponse } from '../shared/weather.model';

export enum WeatherActionTypes {
    SearchCity = '[Weather Section] Search Cities',
    LoadWeather = '[Weather Section] Load Forecast',
    LoadWeatherSuccess = '[Weather Section] Load Forecast Success'
}

export class SearchCity implements Action {
    readonly type = WeatherActionTypes.SearchCity;

    constructor(public payload: { searchCity: string }) { }
}

export class LoadWeather implements Action {
    readonly type = WeatherActionTypes.LoadWeather;

    constructor(public payload: { cityId: string }) { }
}

export class LoadWeatherSuccess implements Action {
    readonly type = WeatherActionTypes.LoadWeatherSuccess;

    constructor(public payload: { forecast: ForecastResponse } = null) { }
}

export type WeatherActions = SearchCity | LoadWeather | LoadWeatherSuccess;
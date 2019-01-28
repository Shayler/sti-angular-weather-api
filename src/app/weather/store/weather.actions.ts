import { Action } from '@ngrx/store';

import { ForecastResponse } from '../shared/weather.model';

export enum WeatherActionTypes {
    SearchCity = '[Weather Section] Search Cities',
    LoadWeather = '[Weather Section] Load Forecast',
    LoadWeatherSuccess = '[Weather Section] Load Forecast Success',
    RemoveWeather = '[Weather Section] Remove Forecast'
}

// City Search action
export class SearchCity implements Action {
    readonly type = WeatherActionTypes.SearchCity;

    constructor(public payload: { searchCity: string }) { }
}

// Begin loading Forecasts action
export class LoadWeather implements Action {
    readonly type = WeatherActionTypes.LoadWeather;

    constructor(public payload: { cityId: string }) { }
}

// After loading Forecasts add to store action
export class LoadWeatherSuccess implements Action {
    readonly type = WeatherActionTypes.LoadWeatherSuccess;

    constructor(public payload: { forecast: ForecastResponse } = null) { }
}

// Remove Forecast from store action
export class RemoveWeather implements Action {
    readonly type = WeatherActionTypes.RemoveWeather;

    constructor(public payload: { cityId: string }) { }
}

export type WeatherActions = SearchCity | LoadWeather | LoadWeatherSuccess | RemoveWeather;

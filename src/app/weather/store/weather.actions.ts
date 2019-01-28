import { Action } from '@ngrx/store';

export enum WeatherActionTypes {
    SearchCity = '[Weather Section] Search Cities'
}

export class SearchCity implements Action {
    readonly type = WeatherActionTypes.SearchCity;

    constructor(public payload: { searchCity: string }) { }
}

export type WeatherActions = SearchCity;
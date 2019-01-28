import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';

import {
    WeatherActionTypes,
    LoadWeather,
    LoadWeatherSuccess
} from './weather.actions';
import { WeatherService } from '../shared/weather.service';

@Injectable()
export class WeatherEffects {

    // Effect for retrieving a city forecast based on provided city Id
    @Effect()
    loadWeather$ = this.actions$
        .pipe(
            ofType<LoadWeather>(WeatherActionTypes.LoadWeather),
            concatMap(action => this.weatherService.loadWeather(action.payload.cityId)),
            map(forecast => new LoadWeatherSuccess({ forecast })
            )
        );

    constructor(private actions$: Actions,
        private weatherService: WeatherService) { }
}

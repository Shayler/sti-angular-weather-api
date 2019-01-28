import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromWeather from '../weather/store/weather.reducer';

export interface State {
    weather: fromWeather.WeatherState;
}

export const reducers: ActionReducerMap<State> = {
    weather: fromWeather.weatherReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
export const getWeatherState = createFeatureSelector<fromWeather.WeatherState>('weather');
export const getRecentForecasts = createSelector(getWeatherState, state => state.forecasts);

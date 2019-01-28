import { WeatherActionTypes, WeatherActions } from './weather.actions';
import { ForecastResponse } from '../shared/weather.model';

// Define State
export interface WeatherState {
    forecasts: ForecastResponse[] | null;
}

// Default State
export const initialWeatherState: WeatherState = {
    forecasts: []
};

export function addForecast(forecastList: ForecastResponse[], newForecast: ForecastResponse): ForecastResponse[] {
    let forecasts = [newForecast, ...forecastList];
    return (forecastList.length >= 8) ? forecasts.slice(0, 8) : forecasts;
}

export function weatherReducer(state = initialWeatherState, action: WeatherActions): WeatherState {
    switch (action.type) {
        // Add the current entity payload to the store
        case WeatherActionTypes.LoadWeather:
            return state;

        // Add the current entity payload to the store
        case WeatherActionTypes.LoadWeatherSuccess:
            return {
                ...state,
                forecasts: addForecast(state.forecasts, action.payload.forecast)
            };

        default:
            return state;
    }
}
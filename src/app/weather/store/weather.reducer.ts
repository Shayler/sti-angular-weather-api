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
    let forecasts = (findForecastById(forecastList, newForecast.city.id) !== -1) ? updateForecast(forecastList, newForecast) : [newForecast, ...forecastList];
    return (forecastList.length >= 8) ? forecasts.slice(0, 8) : forecasts;
}

export function updateForecast(forecastList: ForecastResponse[], newForecast: ForecastResponse): ForecastResponse[] {
    forecastList[findForecastById(forecastList, newForecast.city.id)] = newForecast;
    let forecasts = forecastList;
    return forecasts;
}

export function findForecastById(forecastList: ForecastResponse[], id: string): number {
    return forecastList.findIndex(x => x.city.id === id);
}

export function removeForecast(forecastList: ForecastResponse[], id: string): ForecastResponse[] {
    forecastList.splice(findForecastById(forecastList, id), 1);
    let forecasts = forecastList;
    return forecasts;
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

        case WeatherActionTypes.RemoveWeather:
            return {
                ...state,
                forecasts: removeForecast(state.forecasts, action.payload.cityId)
            };

        default:
            return state;
    }
}
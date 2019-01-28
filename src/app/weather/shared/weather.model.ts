export interface CitySearchResult {
    id: string;
    name: string;
    sys: { country: string };
    main: { temp: number };
    weather: WeatherDetail[];
}

export interface ForecastResponse {
    city: City;
    list: Forecast[];
}

export interface City {
    id: string;
    name: string;
    country: string;
}

export interface Forecast {
    dt: number;
    temp: ForecastTemp;
    pressure: number;
    weather: WeatherDetail[];
    speed: number;
    deg: number;
}

export interface ForecastTemp {
    day: number;
    min: number;
    max: number;
}

export interface WeatherDetail {
    main: string;
    description: string;
}

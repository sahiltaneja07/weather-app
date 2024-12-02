import { Coordinates } from "./geolocation-type";
import { WeatherCondition, WeatherData } from "./weather-type";

export interface Forecast {
    cod: string;
    message: number;
    cnt: number;
    list: ForecastList[];
    city: City;
}

interface ForecastList {
    dt: number;
    main: WeatherData['main'];
    weather: WeatherCondition[];
    clouds: {
        all: number;
    }
    wind: WeatherData['wind'];
    visibility: number;
    dt_txt: string
}

interface City {
    id: number;
    name: string;
    coord: Coordinates;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface ForecastState {
    data: Forecast |null;
    error: string;
    isLoading: boolean;
}

export interface ForecastProps {
    data: Forecast;
}

export interface DailyForecast {
    date: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    wind: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    };
  
}

import { Coordinates } from "./types/geolocation-type";
import { getUrl, getAPI } from './fetch-api';
import { APP_CONSTANT } from "./constants";
import { WeatherData } from "./types/weather-type";
import { Forecast } from "./types/forecast-type";

export async function getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
    const url = getUrl(APP_CONSTANT.weather, {
        lat: lat.toString(),
        lon: lon.toString(),
        units: "metric",
    });
    return getAPI<WeatherData>(url);
}

export async function getForecast({lat, lon}: Coordinates): Promise<Forecast> {
    const url = getUrl(APP_CONSTANT.forecast, {
        lat,
        lon,
        units: "metric",
    });
    return getAPI<Forecast>(url);
}

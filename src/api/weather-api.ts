import { Coordinates } from "./types/geolocation-type";
import { getUrl, getAPI } from './fetch-api';
import { APP_CONSTANT } from "./constants";
import { WeatherData } from "./types/weather-type";

export async function getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
    const url = getUrl(APP_CONSTANT.weather, {
        lat: lat.toString(),
        lon: lon.toString(),
        units: "metric",
    });
    return getAPI<WeatherData>(url);
}

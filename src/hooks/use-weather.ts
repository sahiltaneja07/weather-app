import { Coordinates } from '@/api/types/geolocation-type';
import { WeatherData, WeatherDataState } from '@/api/types/weather-type';
import { getCurrentWeather } from '@/api/weather-api';
import { useEffect, useState } from 'react';

const useWeather = (coordinates: Coordinates | null) => {
    const [weather, setWeather] = useState<WeatherDataState>({
        data: null,
        error: '',
        isDataLoaded: false
    });

    useEffect(() => {
        if (coordinates) {
            getWeatherData();
        }
    }, [coordinates?.lat]);

    function getWeatherData() {
        getCurrentWeather(coordinates)
        .then((weather: WeatherData) => {
            setWeather(({
                data: weather,
                error: '',
                isDataLoaded: true
            }));
        }).catch(err => {
            setWeather(({
                data: null,
                error: err,
                isDataLoaded: true
            }));
        });
    }

    return weather;
}

export default useWeather
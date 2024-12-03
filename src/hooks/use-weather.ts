import { DataState } from '@/api/types/generic-type';
import { Coordinates } from '@/api/types/geolocation-type';
import { WeatherData } from '@/api/types/weather-type';
import { getCurrentWeather } from '@/api/weather-api';
import { useEffect, useState } from 'react';

const useWeather = (coordinates: Coordinates | null) => {
    const [weather, setWeather] = useState<DataState<WeatherData>>({
        data: null,
        error: '',
        isLoading: true
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
                isLoading: false
            }));
        }).catch(err => {
            setWeather(({
                data: null,
                error: err,
                isLoading: false
            }));
        });
    }

    return weather;
}

export default useWeather
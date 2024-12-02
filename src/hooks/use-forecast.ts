import { Forecast, ForecastState } from "@/api/types/forecast-type";
import { Coordinates } from "@/api/types/geolocation-type";
import { getForecast } from "@/api/weather-api";
import { useEffect, useState } from "react";

const useForecast = (coordinates: Coordinates | null) => {
    const [forecast, setForecast] = useState<ForecastState>({
        data: null,
        error: '',
        isLoading: true
    });

    useEffect(() => {
        if (coordinates) {
            getForecastData();
        }
    }, [coordinates?.lat]);

    function getForecastData() {
        getForecast(coordinates)
        .then((forecast: Forecast) => {
            setForecast({
                data: forecast,
                error: '',
                isLoading: false
            });
        })
        .catch(error => {
            setForecast({
                data: null,
                error: error,
                isLoading: false
            });
        });
    }

    return forecast;
}

export default useForecast;
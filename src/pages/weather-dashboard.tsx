import Loader from '@/components/loader';
import MyLocation from '@/components/my-location';
import NoLocation from '@/components/no-location';
import TemperatureChart from '@/components/temperature-chart';
import { Button } from '@/components/ui/button';
import WeatherDetail from '@/components/weather-detail';
import WeatherForecast from '@/components/weather-forecast';
import useForecast from '@/hooks/use-forecast';
import useGeolocation from '@/hooks/use-geolocation';
import useWeather from '@/hooks/use-weather';
import { RefreshCw } from 'lucide-react';
import { toast } from "sonner";

const WeatherDashboard = () => {
    const {
        coords,
        error: geolocationError,
        isLoading: isGeolocationLoading,
        getLocation
    } = useGeolocation();

    const {
        data: weatherData,
        error: weatherError,
        isDataLoaded: isWeatherDataLoaded
    } = useWeather(coords);

    const {
        data: forecastData,
        error: forecastError,
        isLoading: isForecastLoading
    } = useForecast(coords);

    if (isGeolocationLoading || !isWeatherDataLoaded || isForecastLoading) {
        return (
            <Loader />
        )
    }

    if (geolocationError || !coords) {
        return (
            <NoLocation getLocation={getLocation} />
        )
    }

    if (weatherError || forecastError) {
        toast.error("Unknown error has occured", {
            description: "Please try again later"
        });
        return (
            <Loader />
        )
    }

    return (
        <>
            <div className='flex justify-between mb-3'>
                <span className='font-bold text-lg'>My Location</span>
                <Button variant='outline'>
                    <RefreshCw />
                </Button>
            </div>
            <div className='flex mb-7'>
                <MyLocation data={weatherData} />
                <TemperatureChart />
            </div>
            <div className='flex'>
                <WeatherDetail data={weatherData} />
                <WeatherForecast data={forecastData} />
            </div>
        </>
    )
}

export default WeatherDashboard;
import { WeatherDashboardProps } from '@/api/types/weather-type';
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
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const WeatherDashboard = ({coordinates}: WeatherDashboardProps) => {
    const navigate = useNavigate();

    let {
        data: coords,
        error: geolocationError,
        isLoading: isGeolocationLoading,
        refreshLocation
    } = useGeolocation();

    let heading: any = 'My Location';
    if (coordinates) {
        coords = coordinates;
        heading = <Button variant='outline' onClick={() => navigate('/')}><ArrowLeft /></Button>
    }

    const {
        data: weatherData,
        error: weatherError,
        isLoading: isWeatherDataLoading
    } = useWeather(coords);

    const {
        data: forecastData,
        error: forecastError,
        isLoading: isForecastLoading
    } = useForecast(coords);

    if (isGeolocationLoading || isWeatherDataLoading || isForecastLoading) {
        return (
            <Loader />
        )
    }

    if (geolocationError || !coords) {
        return (
            <NoLocation getLocation={refreshLocation} />
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

    const refreshWeather = () => {
        refreshLocation();
    }

    return (
        <>
            <div className='flex justify-between mb-3'>
                <span className='font-bold text-lg'>{heading}</span>
                <Button variant='outline' onClick={refreshWeather}>
                    <RefreshCw />
                </Button>
            </div>
            <div className='flex mb-7'>
                <MyLocation data={weatherData} />
                <TemperatureChart data={forecastData} />
            </div>
            <div className='flex'>
                <WeatherDetail data={weatherData} />
                <WeatherForecast data={forecastData} />
            </div>
        </>
    )
}

export default WeatherDashboard;
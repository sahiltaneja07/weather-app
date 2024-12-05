import { useLocation } from "react-router-dom";
import WeatherDashboard from "./weather-dashboard";

const SelectedCity = () => {
    const {state: coordinates} = useLocation();

    return (
        <WeatherDashboard coordinates={coordinates} />
    )
}

export default SelectedCity;
import { useEffect, useRef, useState } from "react";
import { GeolocationState } from "@/api/types/geolocation-type";

export default function useGeolocation() {
    const firstTime = useRef(true);
    const [locationData, setLocationData] = useState<GeolocationState>({
        error: '',
        coords: null,
        isLoading: true
    })

    useEffect(() => {
        if (firstTime.current === true) {
            getLocation();
        }
        return (): void => {
            firstTime.current = false;
        };
    }, []);

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
        } else {
            setLocationData(({
                coords: null,
                error: 'Geolocation not supported',
                isLoading: false
            }));
        }
    }

    function handleSuccess(position) {
        setLocationData(({
            coords: {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            },
            error: '',
            isLoading: false
        }));
    }

    function handleError(error) {
        setLocationData(({
            error: error.message,
            coords: null,
            isLoading: false
        }));
    }

    return {
        ...locationData,
        getLocation
    }
}

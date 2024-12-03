import { useEffect, useRef, useState } from "react";
import { Coordinates } from "@/api/types/geolocation-type";
import { DataState } from "@/api/types/generic-type";

export default function useGeolocation() {
    const firstTime = useRef(true);
    const [locationData, setLocationData] = useState<DataState<Coordinates>>({
        data: null,
        error: '',
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
                data: null,
                error: 'Geolocation not supported',
                isLoading: false
            }));
        }
    }

    function handleSuccess(position) {
        setLocationData(({
            data: {
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
            data: null,
            isLoading: false
        }));
    }

    function refreshLocation() {
        setLocationData(({
            error: '',
            data: null,
            isLoading: true
        }));
        getLocation();
    }

    return {
        ...locationData,
        refreshLocation
    }
}

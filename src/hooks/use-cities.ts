import { getCities } from "@/api/search-api";
import { DataState } from "@/api/types/generic-type";
import { GeocodingResponse } from "@/api/types/geolocation-type";
import { useEffect, useState } from "react"

const useCities = (query: string) => {
    const [cities, setCities] = useState<DataState<GeocodingResponse[]>>({
        data: null,
        error: '',
        isLoading: true
    });
    
    useEffect(() => {
        if (query?.length > 2) {
            getCitiesData();
        }
    }, [query]);

    function getCitiesData() {
        getCities(query).then((cityData: GeocodingResponse[]) => {
            setCities(({
                data: cityData,
                error: '',
                isLoading: false
            }));
        }).catch(err => {
            setCities(({
                data: null,
                error: err,
                isLoading: false
            }));
        });
    }

    return cities;
}

export default useCities
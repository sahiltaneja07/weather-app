import { APP_CONSTANT } from "./constants";
import { getAPI, getUrl } from "./fetch-api";
import { GeocodingResponse } from "./types/geolocation-type";

export async function getCities(q: string): Promise<GeocodingResponse[]> {
    const url = getUrl(APP_CONSTANT.geo, {
        q,
        limit: '5'
    });
    return getAPI<GeocodingResponse[]>(url);
}

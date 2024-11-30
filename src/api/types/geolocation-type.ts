export interface Coordinates {
    lat: number;
    lon: number;
}

export interface GeolocationState {
    coords: Coordinates | null;
    error: string;
    isLoading: boolean;
}

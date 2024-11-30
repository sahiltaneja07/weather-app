import { API_CONFIG } from "./config";

export function getUrl(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
        appid: API_CONFIG.API_KEY,
        ...params,
    });
    return `${API_CONFIG.BASE_URL}/${endpoint}?${searchParams.toString()}`;
}

export async function getAPI<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Weather API Error: ${response.statusText}`);
    }

    return response.json();
}

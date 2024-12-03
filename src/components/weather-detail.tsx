import { Compass, Gauge, Sunrise, Sunset } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { WeatherData } from "@/api/types/weather-type";
import { format } from "date-fns";
import { DataProps } from "@/api/types/generic-type";

const WeatherDetail = ({ data }: DataProps<WeatherData>) => {
    const {wind, sys, main} = data;

    const formatTime = (timestamp: number) => {
        return format(new Date(timestamp * 1000), "h:mm a");
    };

    const getWindDirection = (degree: number) => {
        const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        const index =
            Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 8;
        return directions[index];
    };

    const details = [{
        title: 'Sunrise',
        value: formatTime(sys.sunrise),
        color: "text-orange-500",
        icon: Sunrise
    }, {
        title: 'Sunset',
        value: formatTime(sys.sunset),
        color: "text-blue-500",
        icon: Sunset
    }, {
        title: 'Wind Direction',
        value: `${getWindDirection(wind.deg)} (${wind.deg}°)`,
        color: "text-green-500",
        icon: Compass
    }, {
        title: 'Pressure',
        value: `${main.pressure} hPa`,
        color: "text-purple-500",
        icon: Gauge
    }]

    return (
        <Card className="mr-4 flex-auto w-42 h-[260px]">
            <CardHeader>
                <CardTitle>Weather Details</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                    {details.map((detail) => (
                        <div
                            key={detail.title}
                            className="flex items-center gap-3 rounded-lg border p-4"
                        >
                            <detail.icon className={`h-5 w-5 ${detail.color}`} />
                            <div>
                                <p className="text-sm font-medium leading-none">
                                    {detail.title}
                                </p>
                                <p className="text-sm text-muted-foreground">{detail.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default WeatherDetail
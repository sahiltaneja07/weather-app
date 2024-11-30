import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

const NoLocation = ({getLocation}) => {
  return (
    <div>
        <h2 className="mb-2">Location permission denied</h2>
        <h4 className="mb-4">Please enable location</h4>
        <Button variant="outline" onClick={getLocation}>
            Enable Location
            <MapPin className="mr-2 h-4 w-4" />
        </Button>
    </div>
  )
}

export default NoLocation;
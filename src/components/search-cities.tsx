import { useState } from "react";
import { Button } from "./ui/button";
import { Search, Loader2, Clock, Star, XCircle } from "lucide-react";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";
import { DialogTitle } from "./ui/dialog";
import useCities from "@/hooks/use-cities";
import Loader from "./loader";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const SearchCities = () => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const {
        data: cities,
        error,
        isLoading
    } = useCities(query);

    function onCitySelect(data) {
        setOpen(false);
        const dataArr = data.split('|');
        navigate(`/city/${dataArr[2]}`, {state: {lat: dataArr[0], lon: dataArr[1]}});
    }

    if (error) {
        toast.error("Unknown error has occured", {
            description: "Please try again later"
        });
        return (
            <Loader />
        )
    }

    return (
        <>
            <Button
                variant="outline"
                className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
                onClick={() => setOpen(true)}
            >
                <Search className="mr-2 h-4 w-4" />
                Search cities...
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <DialogTitle className="hidden">Title</DialogTitle>
                <Command>
                    <CommandInput
                        placeholder="Search cities..."
                        value={query}
                        onValueChange={setQuery}
                    />
                    <CommandList>
                        {query.length > 2 && !isLoading && (
                            <CommandEmpty>No cities found.</CommandEmpty>
                        )}

                        {/* {history.length > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <div className="flex items-center justify-between px-2 my-2">
                                        <p className="text-xs text-muted-foreground">
                                            Recent Searches
                                        </p>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => clearHistory.mutate()}
                                        >
                                            <XCircle className="h-4 w-4" />
                                            Clear
                                        </Button>
                                    </div>
                                    {history.map((item) => (
                                        <CommandItem
                                            key={item.id}
                                            value={`${item.lat}|${item.lon}|${item.name}|${item.country}`}
                                            onSelect={handleSelect}
                                        >
                                            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                            <span>{item.name}</span>
                                            {item.state && (
                                                <span className="text-sm text-muted-foreground">
                                                    , {item.state}
                                                </span>
                                            )}
                                            <span className="text-sm text-muted-foreground">
                                                , {item.country}
                                            </span>
                                            <span className="ml-auto text-xs text-muted-foreground">
                                                {format(item.searchedAt, "MMM d, h:mm a")}
                                            </span>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </>
                        )} */}

                        <CommandSeparator />
                        {cities && cities.length > 0 && (
                            <CommandGroup heading="Suggestions">
                                {isLoading && (
                                    <div className="flex items-center justify-center p-4">
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    </div>
                                )}
                                {cities?.map((location) => (
                                    <CommandItem
                                        key={`${location.lat}-${location.lon}`}
                                        value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                                        onSelect={onCitySelect}
                                    >
                                        <Search className="mr-2 h-4 w-4" />
                                        <span>{location.name}</span>
                                        {location.state && (
                                            <span className="text-sm text-muted-foreground">
                                                , {location.state}
                                            </span>
                                        )}
                                        <span className="text-sm text-muted-foreground">
                                            , {location.country}
                                        </span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        )}
                    </CommandList>
                </Command>
            </CommandDialog>
        </>
    );
}

export default SearchCities;
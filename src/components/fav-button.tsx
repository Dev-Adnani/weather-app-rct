import { WeatherData } from "@/api/types"
import { useFavorites } from "@/hooks/use-fav-city"
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { toast } from "sonner";

interface FavoriteButtonProps {
    data: WeatherData,
}

export default function FavoriteButton({data}:FavoriteButtonProps) {

    const { addFavorite,removeFavorite,isFavorite,} = useFavorites();
    const isCurrentFav = isFavorite(data.coord.lat,data.coord.lon)

    const handleToggleFav = () => {
        if(isCurrentFav)
        {
            removeFavorite.mutate(`${data.coord.lat}-${data.coord.lon}`)
            toast.error(`Removed ${data.name} From Fav`)
        }
        else
        {
            addFavorite.mutate({
                name:data.name,
                lat:data.coord.lat,
                lon:data.coord.lon,
                country:data.sys.country
            })
            toast.success(`Added ${data.name} To Fav`)
        }
    }


  return (
   <Button
    variant={isCurrentFav ? "default" : "outline"}
    size={"icon"}
    onClick={handleToggleFav}
    className={isCurrentFav ? "bg-yellow-500 hover:bg-yellow-600" : ""}
   >
    <Star
    className={`h-4 w-4  ${isCurrentFav ? "fill-current" : ""}`}
    />
   </Button>
  )
}

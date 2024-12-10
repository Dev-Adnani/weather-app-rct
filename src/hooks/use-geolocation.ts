import { Coordinates } from "@/api/types";
import { useEffect, useState } from "react";

interface GeoLocationState {
    coordinates:Coordinates | null;
    error: string | null;
    isLoading: boolean
}

export function useGeolocation(){
    const [locationData,setLocationData] = useState<GeoLocationState>({
        coordinates:null,
        error:null,
        isLoading:true
    })

    const getLocation = () => {
        setLocationData((prev) => ({
            ...prev,isLoading:true,
            error:null
        }));

        if(!navigator.geolocation){
            setLocationData({
                coordinates:null,
                error:"Geo location not supported by browser",
                isLoading:false,
            })
            return;
        }

        navigator.geolocation.getCurrentPosition((pos) => {
            setLocationData( {
                coordinates:{
                    lat:pos.coords.latitude,
                    lon:pos.coords.longitude,
                },
                error:null,
                isLoading:false
            })
        },(err) => {
            let errorMessage: string;

            switch(err.code)
            {
                case err.PERMISSION_DENIED:
                    errorMessage = "Permission Denied,  Please enable location access"
                    break;
                case err.POSITION_UNAVAILABLE:
                    errorMessage = "Location info , not available";
                    break;
                case err.TIMEOUT:
                    errorMessage = "Location req timed out";
                    break;
                default:
                    errorMessage = "Something went wrong"
            }

            setLocationData({
                coordinates:null,
                error:errorMessage,
                isLoading:false,
            })
        },{
            enableHighAccuracy:true,
            timeout:5000,
            maximumAge:0,
        })
    }

    useEffect(() => {
        getLocation();
    },[]);

    return {
        ...locationData,
        getLocation
    }
}
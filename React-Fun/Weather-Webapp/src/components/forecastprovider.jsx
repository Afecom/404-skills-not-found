import { useState, useContext, useEffect, use } from "react";
import { Home } from "./home";
import ForecastContext from "./forecastContext";

 function ForecastProvider(){
    const [weatherData, setWeatherData] = useState(null)
    
     useEffect(() => {
            async function weather(){
                try{
                    const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=9f420cfe1706422d941145301250507&q=Addis+Ababa");
                    if (!response.ok){
                        throw new Error("Couldn't fetch the data from the api" + response.status)
                    }
                    else{
                        const data = await response.json();
                        setWeatherData(data)
                    }
                }
                catch (error){
                    console.error("There was an error fetching the data from the API", error)
                }
    
                
            }
            weather();
        }, [])
        return(
            <ForecastContext value={weatherData}>
                <Home />
            </ForecastContext>
        )
}
export default ForecastProvider
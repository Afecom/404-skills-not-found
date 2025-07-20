import { useState, useContext, useEffect, use } from "react";
import { Home } from "./home";
import ForecastContext from "./forecastContext";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.weatherapi.com/v1'
})

 function ForecastProvider(){
    const [weatherData, setWeatherData] = useState(null)
    
     useEffect(() => {
            async function weather(){
                try{
                    const response = await axiosInstance.get('/forecast.json', {
                        params: {
                            key: '9f420cfe1706422d941145301250507',
                            q: 'Addis Ababa'
                        }
                    });
                    setWeatherData(response.data)
                    console.log(weather)
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
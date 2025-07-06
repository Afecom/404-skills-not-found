import home from '../assets/House.png'
import { Forecast } from "./forecast"
import { useContext } from 'react'
import ForecastContext from './forecastContext'

export const Home = () => {
    const data = useContext(ForecastContext)

   if (data){
    return(
        <div>
            <div className="w-[50%] text-center relative top-28 m-auto">
                    <h1 className="font-[helvetica] text-white text-3xl mt-1.5" id="city">{data.location.name}</h1>
                    <h1 className="text-7xl font-[helvetica] font-thin text-white mt-2" id="temp">{data.current.temp_c}°</h1>
                    <h3 className="font-[helvetica] text-2xl font-semibold text-gray-400 mt-1" id="status">{data.current.condition.text}</h3>
                    <h5 className="font-[helvetica] text-2xl text-white font-bold inline mr-3" id="high">H:{data.forecast.forecastday[0].day.maxtemp_c}°</h5>
                    <h5 className="font-[helvetica] text-2xl text-white font-bold inline" id="low">L:{data.forecast.forecastday[0].day.mintemp_c}°</h5>
                </div>
                <div className="relative w-full">
                    <img src={home} alt="home image" className="mt-36"/>
                    <div className="w-full h-74 border-t-gray-200 border-t-2 rounded-t-3xl absolute top-52 bg-indigo-950/30 backdrop-blur-sm">
                        <div className="flex justify-around py-6 px-2 mb-0">
                            <p className="text-gray-300 text-[22px] font-[helvetica]">Hourly Forecast</p>
                            <p className="text-gray-300 text-[22px] font-[helvetica]">Weekly Forecast</p>
                        </div>
                        <div className="w-[90%] m-auto mt-0 flex gap-6 justify-center">
                                <Forecast time={12}/>
                                <Forecast time={new Date().getHours()}/>
                                <Forecast time={14}/>
                        </div>
                    </div>
                </div>
            </div>
    )
   }
   else{
    return(
        <p>Loading</p>
    )
   }
}
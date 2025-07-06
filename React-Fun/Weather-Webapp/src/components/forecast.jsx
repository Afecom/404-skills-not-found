import forecasticon from '../assets/forecasticon.png'
import ForecastContext from './forecastContext'
import { useContext } from 'react'

export const Forecast = (props) => {
    const data = useContext(ForecastContext)
    let time = props.time
        if (time > 12){
            time = time + " PM"
        }
        else{
            time = time + " AM"
        }

   if (data){
    return(
        <div className='mt-0'>
            <div className="flex-col w-22 gap-4 bg-indigo-950/70 backdrop-blur-sm text-center py-4 px-4 rounded-full">
                <h5 className='text-white text-xl'>{time}</h5>
                <img src={forecasticon} alt="cloud" className='mt-4 w-24'/>
                <h4 className='text-white mt-7 text-4xl font-thin'>{data.forecast.forecastday[0].hour[props.time].temp_c}</h4>
            </div>
        </div>
    )
   }
   else{
    return (
        <p>Loading...</p>
    )
   }
}
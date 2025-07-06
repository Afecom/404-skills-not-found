import style from './digitalClock.module.css'
import { useState, useEffect } from 'react'

function DigitalClock(){
    const [time, timeSetter] = useState(new Date())

    useEffect(() => {
        const intervalGetter = setInterval(timeUpdater, 1000)

        return () => {
            clearInterval(intervalGetter);
        }
    }, [])

    function timeUpdater(){
        timeSetter(new Date())
    }

    function timeFormatter(){
        const hour = time.getHours()
        const minute = time.getMinutes()
        const second = time.getSeconds()
        const meridium = hour >= 12 ? "PM" : "AM" 
        let currentTime = `${padZero(hour)}:${padZero(minute)}:${padZero(second)} ${meridium}`

        return currentTime;
    }

    function padZero(number){
        return number < 10 ? "0" + number : "" + number
    }

    return(
        <div className={style.clockContainer}>
            <div className={style.clock}>
                <span>{timeFormatter()}</span>
            </div>
        </div>
    );
}
export default DigitalClock
import { useState } from 'react'

function Car(){
    const [car, setCar] = useState({year: 2024, brand: "Mercedes", model: "G-class"})
    const yearChangeHandler = (e) => setCar(c => ({...c, year: e.target.value}))
    const brandChangeHandler = (e) => setCar(c => ({...c, brand: e.target.value}))
    const modelChangeHandler = (e) => setCar(c => ({...c, model: e.target.value}))

    return(
        <div>
            <p>Your favorite car is: {car.year}, {car.brand}, {car.model}!</p>
            <input type="number" value={car.year} onChange={yearChangeHandler}/><br />
            <input type="text" value={car.brand} onChange={brandChangeHandler}/><br />
            <input type="text" value={car.model} onChange={modelChangeHandler}/>
        </div>
    );
}
export default Car
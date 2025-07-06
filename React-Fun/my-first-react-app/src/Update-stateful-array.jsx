import { useState } from "react"

function MyComponent(){
    const [cars, setCars] = useState([{year: 2025, brand: "Mercedes", model: "G-class"}]);
    const [newYear, yearSetter] = useState(new Date().getFullYear());
    const [newBrand, brandSetter] = useState();
    const [newModel, modelSetter] = useState();

    function addCars(){
        

        const newCar = {year: newYear, brand: newBrand, model: newModel};

        setCars(c => [...c, newCar]);

    }

    function removeCar(index){
        setCars(c => c.filter((_, i) => i !== index))
    }

    return(
        <div>
            <h1>List of cars</h1>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => removeCar(index)}>{car.year} {car.brand} {car.model}</li>)}
            </ul>
            <input type="text" placeholder="Please enter car year" onChange={(e) => yearSetter(e.target.value)}/><br />
            <input type="text" placeholder="Please enter car brand" onChange={(e) => brandSetter(e.target.value)}/><br />
            <input type="text" placeholder="Please enter car model" onChange={(e) => modelSetter(e.target.value)}/><br />
            <button onClick={addCars}>Add Car</button>
        </div>
    );
}
export default MyComponent
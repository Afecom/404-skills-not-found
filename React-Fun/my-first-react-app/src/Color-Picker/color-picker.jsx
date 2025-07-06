import { useState } from "react";
import styles from './color-picker.module.css'

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF")
    const colorChangeHandler = (e) => setColor(e.target.value)

    return(
        <div className={styles.colorPickercontainer}>
            <h1>Color Picker</h1>
            <div className={styles.colorDisplay} style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <input type="color" onChange={colorChangeHandler} value={color}/>
        </div>
    );
}
export default ColorPicker
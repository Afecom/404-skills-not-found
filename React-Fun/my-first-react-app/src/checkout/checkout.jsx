import React, {useState} from 'react'
import styles from './checkout.module.css'

function Checkout(){
    const [firstName, firstNameSetter] = useState();
    const [lastName, lastNameSetter] = useState();
    const [quantity, quantitySetter] = useState(1);
    const [paymentMethod, paymentMethodSetter] = useState("Didnt select one");
    const [shippingMethod, shippingMethodSetter] = useState("pickup");
    const [comment, commentSetter] = useState();

    const firstNameChangeHandler = (e) => firstNameSetter(e.target.value);
    const lastNameChangeHandler = (e) => lastNameSetter(e.target.value);
    const quantityChangeHandler = (e) => quantitySetter(e.target.value);
    const paymentMethodChangeHandler = (e) => paymentMethodSetter(e.target.value);
    const shippingChangeHandler = (e) => shippingMethodSetter(e.target.value);
    const textAreaChangeHandler = (e) => commentSetter(e.target.value);

    return(
        <div className={styles.container}>
            <input type="text" value={firstName} onChange={firstNameChangeHandler} placeholder='First Name'className={styles.input}/><br />
            <input type="text" value={lastName} onChange={lastNameChangeHandler} placeholder='Last Name' className={styles.input}/><br />
            <input type="number" value={quantity} onChange={quantityChangeHandler} placeholder='quantity' className={styles.input}/><br />
            <select value={paymentMethod} className={styles.input} onChange={paymentMethodChangeHandler}>
                <option value="Didnt select one">-- Select An Option --</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Gift-Card">Gift Card</option>
            </select><br />
            <label>
                <input type="radio" onChange={shippingChangeHandler} value="Delivery" checked={shippingMethod === "Pickup"} className={styles.radio}/>
                Pickup <br />
            </label>
            <label>
                <input type="radio" onChange={shippingChangeHandler} value="Delivery" checked={shippingMethod === "Delivery"} className={styles.radio}/>
                Delivery <br />
            </label>
            <textarea value={comment} onChange={textAreaChangeHandler} className={styles.textArea} placeholder='Any delivery instructions'></textarea>
            <h2><b><u>Checkout Data</u></b></h2>
            <p>First-Name: {firstName}</p>
            <p>Last-Name: {lastName}</p>
            <p>Quantity: {quantity}</p>
            <p>Payment-Method: {paymentMethod}</p>
            <p>Shipping-Method: {shippingMethod}</p>
            <p>Delivery-Instructions: {comment}</p>
        </div>
    );
}
export default Checkout
import React, {useState} from "react";
import Form4 from "./Form4.jsx";

const Form3 = (props) => {

  return (
    <div className="forms">
      <form id="form-3" onSubmit={(e) => {
        e.preventDefault();
        var form3 = {
          'cardNum' : e.target[0].value,
          'expiry' : e.target[1].value,
          'cvv' : e.target[2].value,
          'billingZip' : e.target[3].value
        }
        props.updateForm(<Form4 updateForm={props.updateForm} form1={props.form1} form2={props.form2} form3={form3}/>)
      }}>
      <h4>Billing Info</h4>
        <label >Credit Card:</label>
        <input id="cardNum"></input>
        <label >Expiry:</label>
        <input id="expiry" ></input>
        <label>CVV:</label>
        <input></input>
        <label>Billing Zip:</label>
        <input></input>
        <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default Form3;
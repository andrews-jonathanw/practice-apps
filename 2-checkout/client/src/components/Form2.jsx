import React, {useState} from "react";
import Form3 from "./Form3.jsx";

const Form2 = (props) => {
  return (
    <div className="forms">
      <form id="form-2" onSubmit={(e) => {
        e.preventDefault();
        var form2 = {
          'street' : e.target[0].value,
          'apt' : e.target[1].value,
          'city' : e.target[2].value,
          'state' : e.target[3].value,
          'zip' : e.target[4].value,
          'phone' : e.target[5].value
        }
        props.updateForm(<Form3 updateForm={props.updateForm} form1={props.form1} form2={form2}/>)
      }}>
        <h4>Mailing Address</h4>
        <label id="line1">Line 1:</label>
        <input placeholder="number, street" id="line1"></input>
        <label id="line2">Line 2:</label>
        <input placeholder="apt, po, etc "></input>
        <label>City:</label>
        <input></input>
        <label>State:</label>
        <input></input>
        <label>Zip:</label>
        <input></input>
        <label>Phone:</label>
        <input></input>
        <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default Form2;
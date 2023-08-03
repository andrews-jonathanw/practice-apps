import React, {useState} from "react";
import Form2 from "./Form2.jsx";

const Form1 = (props) => {

  return (
    <div className="forms">
      <h4>Account Creation</h4>
      <form id="form-1" onSubmit={(e) => {
        e.preventDefault();
        var form1 = {
          'name' : e.target[0].value,
          'email' : e.target[1].value,
          'password' : e.target[2].value,
        }
        props.updateForm(<Form2 updateForm={props.updateForm} form1={form1}/>)
      }}>
        <label>Name:</label>
        <input placeholder="first and last name"></input>
        <label type='email' id="email" pattern=".+@globex\.com">Email:</label>
        <input></input>
        <label>Password:</label>
        <input></input>
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default Form1;
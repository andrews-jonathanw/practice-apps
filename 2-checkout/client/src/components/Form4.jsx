import React, {useState} from "react";
import axios from "axios";
import App from "./App.jsx";
const Form4 = (props) => {
  console.log('all form data',props);

  let mergedForm = {...props.form1,...props.form2,...props.form3};
  var values = Object.entries(mergedForm);
  var form1 = Object.entries(props.form1);
  var form2 = Object.entries(props.form2);
  var form3 = Object.entries(props.form3);




  return (
    <div className="forms">
      <form id="form-4" onSubmit={(e) => {
        e.preventDefault();
        axios.post('/checkout', {mergedForm})
          .then((res) => {
            console.log('POST from CLIENT');
            props.updateForm(<App />)
          })
          .catch(err => {
            console.log(err);
          })
      }}>
      <h2>Review Info</h2>
      <label>Account Info</label>
        {form1.map((pair, index) => {
          //console.log(pair, index);
          return <ul key={index}>{`${pair[0]} : ${pair[1]}`}</ul>
        })}
        <label>Shipping Info</label>
        {form2.map((pair, index) => {
          //console.log(pair, index);
          return <ul key={index}>{`${pair[0]} : ${pair[1]}`}</ul>
        })}
        <label>Billing Info</label>
        {form3.map((pair, index) => {
          //console.log(pair, index);
          return <ul key={index}>{`${pair[0]} : ${pair[1]}`}</ul>
        })}
        <button type='submit'>Complete</button>
      </form>
    </div>
  )
}

export default Form4;
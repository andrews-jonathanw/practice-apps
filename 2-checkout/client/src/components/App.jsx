import React, {useState} from "react";
import Form1 from "./Form1.jsx";


const App = () => {

  const setFormView = () => {
    return (
      <div>
        <h1>Checkout App</h1>
        <button onClick={(e) => {
          updateForm(<Form1 updateForm={updateForm}/>)
        }}>Start Checkout</button>
      </div>
    );
  }

  const [formState, updateForm] = useState(setFormView())

  return (
    formState
  )

}

export default App;
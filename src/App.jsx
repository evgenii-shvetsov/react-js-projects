import React from "react";

import { useState } from "react";

const App = ()=>{
  const [temperatureValue, setTemperatureValue] = useState(0);

  return (
    <div className="app-container">
      
      <div className="temperature-display-container">
        <div className="temperature-display">{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={()=> setTemperatureValue((prevValue)=> prevValue + 1)}>+</button>
        <button onClick={()=> setTemperatureValue((prevValue)=> prevValue - 1)}>-</button>
      </div>
    </div>
  )
}
export default App;
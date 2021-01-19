import React,{useState} from 'react';
import './App.css';
import Slider from "./compenents/Slider"
import Kodava from "./compenents/Circle"
import {Button} from '@material-ui/core';



function App() {
  const [value, setValue] = useState([0.00, 10.00]);

  const [circles, setCircles] = useState([]);
  function generateShapes() {
    return setCircles([...Array(50)].map((_, i) => ({
      id: i.toString(),
      x: Math.random() * 360,
      y: Math.random() * 438,
      weight: (Math.random()*10).toFixed(2),
  
    })));
  }
  const data = circles.filter((circle) => {
  return ((parseFloat(circle.weight) >= value[0] && parseFloat(circle.weight) <= value[1])) 
}
    
  )

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={generateShapes}>Reset</Button>
        <Kodava circles={data} setCircles={setCircles}/>
        <Slider value={value} setValue={setValue}/>
      </header>
    </div>
  );
}

export default App;

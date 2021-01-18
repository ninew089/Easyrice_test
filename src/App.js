import React,{useState} from 'react';
import './App.css';
import Slider from "./compenents/Slider"
import Kodava from "./compenents/Circle"
function generateShapes() {
  return [...Array(50)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * 360,
    y: Math.random() * 438,
    weight: Math.random().toFixed(2),
    isDragging: false,
  }));
}
const INITIAL_STATE = generateShapes();
function App() {
  const [value, setValue] = useState([5, 7]);

  const [circles, setCircles] = useState(INITIAL_STATE);
  return (
    <div className="App">
      <header className="App-header">
        <Kodava circles={circles} setCircles={setCircles}/>
        <Slider value={value} setValue={setValue}/>
      </header>
    </div>
  );
}

export default App;

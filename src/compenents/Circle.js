import React,{useState} from 'react';

import { Stage, Layer, Star, Circle } from 'react-konva';
function generateShapes() {
    return [...Array(50)].map((_, i) => ({
      id: i.toString(),
      x: Math.random() * 360,
      y: Math.random() * 438,
  
      isDragging: false,
    }));
}
const INITIAL_STATE = generateShapes();

export default function Kodava() {

    const [circles, setCircles] = React.useState(INITIAL_STATE);
    const handleDragStart = (e) => {
        const id = e.target.id();
        setCircles(
            circles.map((circle) => {
            return {
              ...circle,
              isDragging: circle.id === id,
            };
          })
        );
    };
    const handleDragEnd = (e) => {
        setCircles(
            circles.map((circle) => {
            return {
              ...circle,
              isDragging: false,
            };
          })
        );
      };
    
  return (
 

      <Stage width={360} height={438}>
      
          <Layer >
              
   
              {circles.map((circle) => (
                  <>
                      <Circle
                           key={circle.id}
                           id={circle.id}
          x={circle.x}
          y={circle.y}
            draggable
            radius={10}
                          fill="yellow"
                          opacity={0.8}
                          onDragStart={handleDragStart}
                          onDragEnd={handleDragEnd}
                          shadowColor="black"
                          shadowBlur={10}
                          shadowOpacity={0.6}
          />
       
                      </>
        ))}
              </Layer>
        
    </Stage>
 
  );
}

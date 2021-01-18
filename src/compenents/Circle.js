import React,{useState} from 'react';
import { Stage, Layer, Image, Circle } from 'react-konva';
import useImage from 'use-image';
import Images from "./Image"
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


export default function Kodava() {
console.log(INITIAL_STATE)
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

        <Images src="http://128.199.244.46:4000/getimage?image=inferNone94323.jpeg" />
              {circles.map((circle) => (
                  <>
                      <Circle
                            key={circle.id}
                            id={circle.id}
                            x={circle.x}
                            y={circle.y}
                            draggable
                            radius={5}
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

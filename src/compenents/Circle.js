import React from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import Images from "./Image"



export default function Kodava(props) {

    const { circles, setCircles } = props
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

import React from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import Images from "./Image"



export default function Kodava(props) {

    const { circles, setCircles } = props

 
    
  return (
 

      <Stage width={360} height={438}>
      
          <Layer >

        <Images src="http://128.199.244.46:4000/getimage?image=inferNone94323.jpeg" y={-10} />
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

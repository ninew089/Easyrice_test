import React, { useState,useRef,useEffect } from 'react';

import { Image } from 'react-konva';

export default function URLImage(props) {
  const imageRef = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    loadImage();
    return () => {
      if(imageRef.current) {
        imageRef.current.removeEventListener('load', handleLoad);
      }
    }
// eslint-disable-next-line
  }, []);

  useEffect(() => {
  loadImage();
// eslint-disable-next-line
  }, [props.src])

  function handleLoad() {
    setImage(imageRef.current);
  }

  function loadImage() {
    const img = new window.Image();
    img.src = props.src;
    img.crossOrigin="Anonymous";
    imageRef.current = img;
    imageRef.current.addEventListener('load', handleLoad);
  }
  
    
    return (
        <Image
        x={props.x}
        y={props.y}
        image={image}
        scaleY={1 / 3.9}
        scaleX={1/3.2}
        rotationDeg={0}
  />

    )
}
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 800,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
    const classes = useStyles();
    const [value, setValue] = useState([5, 7]);
    const handleChange = (event, newValue) => {
            if (((newValue[1]-newValue[0])>0.1)&&((value[1]-value[0])>0.1)) {
                setValue(newValue)
            } 
    };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
              min{value[0]} max{value[1]}
              
          </Typography>
        
 
          <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              step={0.01}
              getAriaValueText={valuetext}
              min={0.00}
              max={10.00}
          />
   
    </div>
  );
}

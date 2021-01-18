import React, { Component } from 'react';

import { Image } from 'react-konva';



export default class URLImage extends Component {
    state = {
      image: null
    };
    componentDidMount() {
      this.loadImage();
    }
    componentDidUpdate(oldProps) {
      if (oldProps.src !== this.props.src) {
        this.loadImage();
      }
    }
    componentWillUnmount() {
      this.image.removeEventListener('load', this.handleLoad);
    }
    loadImage() {
   
      this.image = new window.Image();
      this.image.src = this.props.src;
      this.image.addEventListener('load', this.handleLoad);
    }
    handleLoad = () => {
      
      this.setState({
        image: this.image
      });
 
    };
    render() {
      return (
        <Image
              x={this.props.x}
              y={this.props.y}
              image={this.state.image}
              ref={node => {
                  this.imageNode = node;
              }}
              scaleY={1 / 4}
              scaleX={1/3.5}
            rotationDeg={0}
        />
      );
    }
  }
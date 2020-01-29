import React, { Component } from 'react';

export default class ColorSelector extends Component {
      // handleClick=(str) => {
      // console.log(this.props);
      // }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((newColor, idx) => {
//here the selectedColor function is setting the state to the new color when clicked, so that , when a "cell Component is clicked,"
//so that when a cell is clicked , matrix state will know which color to pass it to the cell
      return <div onClick={()=>this.props.selectedColor(newColor)} key={idx} className="color-swatch" style={{backgroundColor: newColor}}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}

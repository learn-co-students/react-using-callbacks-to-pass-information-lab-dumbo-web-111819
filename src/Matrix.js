import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()

    this.state = {
      selectedColor: "#FFF"
    }

  }

//this function is responsible for updating selectedColor in state
  selectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  genRow = (vals) => {
    //each rowVals which has 45 ele
    //PASSING COLOR AS PROPS TO CELL Component
    //the return value for this function is a color number
    return vals.map(
      (val, idx) => {
        // console.log(val); return css color num which is an element of rowVals
        //this function will return this CELL DIV which will be added to the
        //div inside the genMatrix()
        //sending color as props to the cell
        return <Cell key={idx} color={val} selectedColor={this.state.selectedColor}/>

      }
  )
  }

  genMatrix = () => {
// this.props.values is the nested array, here we are mapping this array to get back each 25
//elements  which is an array also consist of 46 elements inside
//map returns rowVals
    return this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
console.log(this.state);
//here genMatrix() will return nested DIV
  //assingning props named as selectedColor to ColorSelector line49
  //passing function definiton
    return (
      <div id="app">
        <ColorSelector selectedColor={this.selectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}

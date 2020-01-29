import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    console.log(props);
    //here color is the prop that is being sent by the parent MATRIX
    super(props)
    this.state = {
      color: this.props.color
      //this is the val-starting point
    }
  }
//whenever you do setState the default value from this.state changes/updates and re renders the Component
    handleClick = () => {
      this.setState({
         color: this.props.selectedColor
      })
    }




  render() {
    return (
      <div  onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}

// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {


  handleText = () => {
    console.log("Entering password...")
  }


  render(){
    return <input type="password" onKeyUp={this.handleText} />
  }


}


export default Keypad;

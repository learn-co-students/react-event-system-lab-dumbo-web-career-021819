// Code Keypad Component Here
import React, {Component} from 'react'

class Keypad extends Component {

  printText = () => {
    console.log("Entering password...")
  }
  render(){
    return(
      <input type="password" onKeyUp={this.printText} />
    )
  }
}

export default Keypad;

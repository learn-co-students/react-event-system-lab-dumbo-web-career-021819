// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends React.Component {

  isEnteringPassword = () => {
    console.log('Entering password...')
  }
  render(){
    return (
      <input onKeyUp={this.isEnteringPassword} type="password" />
    )
  }
}

export default Keypad
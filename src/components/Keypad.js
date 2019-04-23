import React from 'react'

class Keypad extends React.Component {

 typingPassword = () => {
   console.log('Entering password...')
 }

  render() {
    return <input onKeyUp={this.typingPassword} type="password"></input>
  }
}

export default Keypad

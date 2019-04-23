import React from 'react';

export default class Keypad extends React.Component {

message = () => {
  console.log('Entering password...')
}

  render() {
    return (
      <div>
        <input onKeyUp={this.message} type="password" />
      </div>
    )
  }
}

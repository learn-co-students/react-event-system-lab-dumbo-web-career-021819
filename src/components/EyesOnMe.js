import React from 'react'

class EyesOnMe extends React.Component {

  focused = () => {
    console.log('Good!', this)
  }

  blurred = () => {
    console.log('Hey! Eyes on me!', this)
  }

  render() {
    return (
      <button onFocus={this.focused} onBlur={this.blurred}></button>
    )
  }
}

export default EyesOnMe

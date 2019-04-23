import React from 'react';

export default class EyesOnMe extends React.Component {
  blurMessage = () => {
    console.log('Hey! Eyes on me!')
  }

  focusMessage = () => {
    console.log('Good!')
  }


  render() {
    return (
      <div>
        <button onBlur={this.blurMessage} onFocus={this.focusMessage}/>
      </div>
    )
  }
}

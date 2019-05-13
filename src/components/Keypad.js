// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component{

    onKeyUp = () => {
        console.log('Entering password...')
    }

    render(){
        return(
            <input onKeyUp={this.onKeyUp} type={'password'} placeholder='password'/>
        )
    }
}
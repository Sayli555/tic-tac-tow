import React from 'react';
import "./tictactow.css"

const Squrecomponents = (props) => {

    const classes=props.className ? `${props.className} square` :"square"
  return (
    <div className={classes} onClick={props.onClick}>
      {props.state}
    </div>
  )
}

export default Squrecomponents

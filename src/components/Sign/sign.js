import React from 'react'

import './sign.css'
export default function Sign(props) {
  return (
    <div className="sign">
      <img src={`${process.env.PUBLIC_URL}/assets/${props.name}.png`}></img>
      <div>{props.name}</div>
      <div>{props.dates}</div>
    </div>
  )
}

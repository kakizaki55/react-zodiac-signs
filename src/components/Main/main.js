import React from 'react'
import zodiac from '../../data'
import './main.css'

import bg from '../../background.jpeg'

import Sign from '../Sign/sign'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${bg})` }}>
      {zodiac.map((sign) => {
        return <Sign key={sign.name} name={sign.name} dates={sign.dates} />
      })}
    </main>
  )
}

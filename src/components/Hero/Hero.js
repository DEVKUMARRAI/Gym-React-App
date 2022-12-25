import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
const hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="left-h">
            <Header/>
        </div>
        <div className="right-h">right</div>
      </div>
    </div>
  )
}

export default hero

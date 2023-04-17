import React from 'react'
import ReactIcon from '../images/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navgrp'>
            <img src={ReactIcon} alt="icon.png" className='icon'/>
            <h3 className='title'>ReactFacts</h3>
        </div>

        <div className='navgrp'>
            <h4>React Course - Project 1</h4>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import ReactIcon from '../images/logo.png'

const Navbar = (props) => {
  const styles = {backgroundColor : props.mode ? "#21222A" : "white"}
  
  return (
    <div className='navbar' style={styles}>
        <div className='navgrp'>
            <img src={ReactIcon} alt="icon.png" className='icon'/>
            <h3 className='title'>ReactFacts</h3>
        </div>
    </div>
  )
}

export default Navbar
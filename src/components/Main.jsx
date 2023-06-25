import React from 'react'

import reactgrey from "../images/logogrey.png"
import reactwhite from "../images/logowhite.png"

const Main = (props) => {
  const styles = props.mode ? {backgroundColor : "#282D35" , backgroundImage : `url(${reactgrey})`} : {backgroundColor : "white" , backgroundImage : `url(${reactwhite})`}
  
  return (
    <div className='Main' style={styles}>
        <div>
            <h1>Fun facts about React</h1>
            <ul className='factlist'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    </div>
  )
}

export default Main
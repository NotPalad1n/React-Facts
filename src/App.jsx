import React from 'react'

import Main from './components/Main'
import Navbar from './components/Navbar'

const App = () => {
  const [mode, setMode] = React.useState(true)

  function handleChange(){
    setMode(prev => !prev)
  }
  
  const styles = { color : mode ? "white" : "#21222A" }

  return (
    <div className='container' style={styles}>
        <div className='reference'>
          <Navbar mode={mode}/>
          <div className='mode'>
            <label htmlFor="mode">Light</label>
            <label className="switch">
              <input
                type="checkbox"
                id='mode'
                name='mode'
                checked={mode}
                onChange={handleChange}
              />
              <span className="slider"></span>
            </label>
            <label htmlFor="mode">Dark</label>
          </div>
        </div>
        <Main mode={mode}/>
    </div>
  )
}

export default App
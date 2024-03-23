
import ReactDOM from 'react-dom'
import React from 'react'

import Navbar from './components/navbar'
import Display from './components/display'
import "./app.css"


const App = () => {
  return (
    <div>
        <div className='row'>
        <Navbar/>
        <Display/>
        
        </div>
    </div>
  )
}

export default App
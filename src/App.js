
import ReactDOM from 'react-dom'
import {React, useState} from 'react' 

import Navbar from './components/navbar'
import Display from './components/display'
import "./app.css"


const App = () => {
  const [dataFromChild, setDataFromChild] = useState("");
  function handle(data){
    setDataFromChild(!data)
  }
  console.log(dataFromChild)
  return (
    <div>
        <div className='row'>
        <Navbar send={handle}/>
        <Display ex={dataFromChild}/>
        </div>
    </div>
  )
}

export default App
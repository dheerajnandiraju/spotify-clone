
import ReactDOM from 'react-dom'
import {React, useState} from 'react' 

import Navbar from './components/navbar'
import Display from './components/display'
import "./app.css"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Playlist from './components/playlist'
import Podcast from './components/podcast'


const App = () => {
  const [dataFromChild, setDataFromChild] = useState("");
  const [show, setshow]=useState("")

  function handle(data){
    setDataFromChild(!data)
  }
  function showdata(data){
    setshow(data)
  }
  console.log(dataFromChild)
  return (

    <div>
        <div className='row'>
        <Navbar send={handle}/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Display ex={dataFromChild} display={showdata}/>}/>
          <Route path='/playlist' element={<Playlist/>}/>
          <Route path='/playlist' element={<Podcast/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App
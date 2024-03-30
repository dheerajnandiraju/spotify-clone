
import ReactDOM from 'react-dom'
import {React, useState} from 'react' 

import Navbar from './components/navbar'
import Display from './components/display'
import "./app.css"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Playlist from './components/playlist'
import Podcast from './components/podcast'
import Playbackbar from './components/playbackbar'
import Songs from './components/songs'


const App = () => {
  const [dataFromChild, setDataFromChild] = useState("");
  const [show, setshow]=useState("")
  const [selectedAlbum, setselectedAlbum]=useState("Liked")

  function handle(data){
    setDataFromChild(!data)
  }
  function showdata(data){
    setshow(data)
  }
  function selectalbum(data){
    setselectedAlbum(data)
  }
 console.log(selectedAlbum)

  return (

    <div>
        <div className='row'>
        <BrowserRouter>
        <Routes>
      <Route path='*' element={<Navbar send={handle} sAlbum={selectalbum}/>}/>
     </Routes>
        <Routes>
          <Route path='/' element={<Display ex={dataFromChild} display={showdata}/>}/>
          <Route path='/playlist' element={<Playlist/>}/>
          <Route path='/playlist' element={<Podcast/>}/>
          <Route path='/songs' element={<Songs albumname={selectedAlbum}/>}/>
        </Routes>
        </BrowserRouter>
        </div>
        <div>
          <Playbackbar/>
        </div>
    </div>
  );
}

export default App

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
  const[selectedsong, setselectedsong]=useState("song 1")
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
  function songselected(data){
    setselectedsong(data)
  }
 console.log(selectedsong)

  return (

    <div>
        <div className='row'>
        <BrowserRouter>
        <Routes>
      <Route path='*' element={<Navbar send={handle} sAlbum={selectalbum}/>}/>
     </Routes>
        <Routes>
          <Route path='/' element={<Display ex={dataFromChild} display={showdata}/>}/>
          <Route path='/playlist' element={<Playlist ex={dataFromChild}/>}/>
          <Route path='/podcast' element={<Podcast ex={dataFromChild}/>}/>
          <Route path='/songs' element={<Songs ssong={songselected} albumname={selectedAlbum} ex={dataFromChild}/>}/>
        </Routes>
        </BrowserRouter>
        </div>
        <div>
          <Playbackbar song={selectedsong}/>
        </div>
    </div>
  );
}

export default App
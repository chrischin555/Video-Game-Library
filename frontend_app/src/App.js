import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import Login from './Login'
import Navbar from './Components/Navbar'
import DragonsDogma from './Components/Video_Game_Pages/DragonsDogma'
import FireEmblem from './Components/Video_Game_Pages/FireEmblem'
import Persona from './Components/Video_Game_Pages/Persona'
import ResidentEvil from './Components/Video_Game_Pages/ResidentEvil'
import Games from './Components/Games'
import Profile from './Profile'
import WishlistPage from './Components/WishlistPage'
import './App.css'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        /*sets up a redirect for signing up*/
        <Route path ='/' exact element = {<Home />}></Route>
        <Route path='/signup' exact element={<Signup />}></Route>
        <Route path='/login' exact element={<Login />}></Route>
        /*sets up a redirect for home page*/
        <Route path='/games/dragonsdogma2' exact element={<DragonsDogma />}></Route>
        <Route path='/games/fireemblem:engage' exact element={<FireEmblem />}></Route>
        <Route path='/games/persona3:reload' exact element={<Persona />}></Route>
        <Route path='/games/residentevil:village' exact element={<ResidentEvil />}></Route>
        <Route path='/games' exact element={<Games />}></Route>
        <Route path='/profile' exact element={<Profile />}></Route>
        <Route path='/wishlist' exact element={<WishlistPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
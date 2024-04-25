import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'

function App() {
  return (
      <BrowserRouter>
        <Routes>
        /*sets up a redirect for logging in*/
        <Route path = '/' element={<Login />}></Route>  
        /*sets up a redirect for signing up*/
        <Route path = '/signup' element={<Signup />}></Route> 
        /*sets up a redirect for home page*/
        <Route path = '/home' element={<Home />}></Route> 
        </Routes>
    </BrowserRouter>
  )
}

export default App;

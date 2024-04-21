import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'

function App() {
  return (
      <BrowserRouter>
        <Routes>
        /*sets up a redirect for logging in*/
        <Route path = '/' element={<Login />}></Route>  
        /*sets up a redirect for signing up*/
        <Route path = '/signup' element={<Signup />}></Route> 
        </Routes>
    </BrowserRouter>
  )
}

export default App;

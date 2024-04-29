import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import Login from './Login'
import Navbar from './Components/Navbar'
import DragonsDogma from './Components/Video_Game_Pages/DragonsDogma'
import FireEmblem from './Components/Video_Game_Pages/FireEmblem'
import Persona from './Components/Video_Game_Pages/Persona'
import ResidentEvil from './Components/Video_Game_Pages/ResidentEvil'
import Profile from './Profile'

import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() =>{
    //managing user loggin state using localStorage
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsAuthenticated(loggedIn);
  }, [])

  const ProtectedRoute = ({ children }) => {
    if(!isAuthenticated){
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they log in, which is a nicer user experience
      // than dropping them off on the home page.

      //if they are not authenticated it will take then to login page
      return <Navigate to="/login" />;

    }

    return children;
  };

  return (
    <BrowserRouter>
    <Navbar isAuthenticated={isAuthenticated}/>
      <Routes>
        /*sets up a redirect for signing up*/
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        /*sets up a redirect for home page*/
        <Route path='/home' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        

        <Route path='/dragonsdogma' element={<DragonsDogma />} />
        <Route path='/fireemblem' element={<FireEmblem />} />
        <Route path='/persona' element={<Persona />} />
        <Route path='/residentevil' element={<ResidentEvil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

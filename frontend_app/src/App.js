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
import Games from './Components/Games'
import Profile from './Profile'
import WishlistPage from './Components/WishlistPage'
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
        <Route path='/home' exact element={<Home />}></Route>
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

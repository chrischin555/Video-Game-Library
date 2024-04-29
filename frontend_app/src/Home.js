import React from 'react'
import './App.css'
import HeroSection from "./Components/HeroSection"
import Cards from "./Components/Cards"

function Home() {
    const handleLogout = () => {
        // Clear user session from local storage
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        // Redirect to login page
        window.location.href = '/login';
      };
    return (
        <>
            <b>{localStorage.getItem("currentUser")}</b>
            <HeroSection />
            <Cards />
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default Home;
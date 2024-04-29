import React from 'react'
import './App.css'
import HeroSection from './Components/HeroSection'
import Cards from './Components/Cards'
import Testpage from './Components/testpage'

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Testpage />
        </>
    );
}

export default Home;
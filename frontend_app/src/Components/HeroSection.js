import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Game Library</h1>
            <p>Look up games, review them, and add to your wishlist!</p>
            <div className="hero-btns">
                <Button>
                    GET STARTED
                </Button>
                <Button>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
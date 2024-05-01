import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
   
    return (
        <div className='cards'>
            <h1>
                Check out these cool games you can review and add to your wishlist!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src ='/images/dragonsdogma2.jpg'
                        label = "Dragon's Dogma II"
                        text = "Action RPG by Capcom"
                        path = "games/dragonsdogma2"
                        />
                        <CardItem src ='/images/fireemblemengage.jpg'
                        label = "Fire Emblem: Engage"
                        text = "Tactical JRPG by Nintendo"
                        path = "games/fireemblem:engage"
                        />
                        <CardItem src ='/images/persona3remake.jpg'
                        label = "Persona 3: Remake"
                        text = "Remake of Persona 3; RPG by Atlus"
                        path = "games/persona3:remake"
                        />
                        <CardItem src ='/images/residentevilvillage.jpg'
                        label = "Resident Evil: Village"
                        text = "Survival horror by Capcom"
                        path = "games/residentevil:village"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

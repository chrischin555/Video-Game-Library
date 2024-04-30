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
                        label = "test"
                        text = "test"
                        path = "/dragonsdogma"
                        />
                        <CardItem src ='/images/fireemblemengage.jpg'
                        label = "test"
                        text = "test"
                        path = "/fireemblem"
                        />
                        <CardItem src ='/images/persona3remake.jpg'
                        label = "test"
                        text = "test"
                        path = "/persona"
                        />
                        <CardItem src ='/images/residentevilvillage.jpg'
                        label = "test"
                        text = "test"
                        path = "/residentevil"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
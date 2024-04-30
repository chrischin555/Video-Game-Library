import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CardItem from './CardItem';  
import './Cards.css';  

function WishlistPage() {
    const [wishlist, setWishlist] = useState([]);
    const currentUserEmail = localStorage.getItem('currentUser');  

    useEffect(() => {
        if (currentUserEmail) {
            fetchWishlist(currentUserEmail);
        }
    }, [currentUserEmail]);

    const fetchWishlist = (email) => {
        Axios.get(`http://localhost:8081/user/wishlist?email=${email}`)
            .then(response => {
                setWishlist(response.data);
            })
            .catch(error => {
                console.error('Error fetching wishlist:', error);
            });
    };

    return (
        <div className="cards">
            <h1>Your Wishlist</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {wishlist.map(game => (
                            <CardItem
                                key={game.GameID}
                                src={game.ImageURL || '/images/placeholder.png'} 
                                label={game.Category}
                                text={game.GameTitle}
                                path={`/games/${game.GameID}`}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WishlistPage;

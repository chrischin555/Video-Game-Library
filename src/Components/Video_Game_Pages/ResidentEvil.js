import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../../App.css';
import './Styles/GameHome.css'; // Import the CSS file

function ResidentEvil() {
    const [gameDetails, setGameDetails] = useState({ reviews: [], rating: 0 });
    const [wishlistAdded, setWishlistAdded] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:8081/game-details/resident-evil")
            .then(response => {
                setGameDetails({
                    reviews: response.data.reviews,
                    rating: response.data.rating
                });
            })
            .catch(error => console.log(error));
    }, []);

    const addToWishlist = () => {
        Axios.post("http://localhost:8081/add-to-wishlist", { gameId: "resident-evil" })
            .then(response => {
                if (response.data.success) {
                    setWishlistAdded(true);
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <div className='gameDetails'>
            <h1>About Resident Evil</h1>
            <img src='/images/residentevilvillage.jpg' alt='Resident Evil Village' />
            <h3>Rating: {gameDetails.rating}</h3>
            <h2>Reviews</h2>
            <ul>
                {gameDetails.reviews.map(review => (
                    <li key={review.id}>{review.text} - {review.user}</li>
                ))}
            </ul>
            <button onClick={addToWishlist} disabled={wishlistAdded}>
                {wishlistAdded ? 'Added to Wishlist' : 'Add to Wishlist'}
            </button>
        </div>
    );
}

export default ResidentEvil;
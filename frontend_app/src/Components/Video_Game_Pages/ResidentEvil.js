
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../../App.css';
import './Styles/GameHome.css'; // Import the CSS file

function ResidentEvil() {
    const [gameDetails, setGameDetails] = useState({ reviews: [], rating: 0 });
    const [wishlistAdded, setWishlistAdded] = useState(false);

    useEffect(() => {
        const gameId = '4'; 
    
        Axios.get(`http://localhost:8081/game/reviews?gameId=${gameId}`)
            .then(response => {
                const reviews = response.data;
                const averageRating = reviews.length > 0 
                    ? reviews.reduce((acc, curr) => acc + curr.Rating, 0) / reviews.length
                    : 0; // Default to 0 if no reviews
    
                setGameDetails(prev => ({
                    ...prev,
                    reviews: reviews,
                    rating: averageRating
                }));
            })
            .catch(error => {
                console.log("Error fetching game reviews:", error);
            });
    }, []);

    const addToWishlist = () => {
        const userId = '1'; // This should come from the user's session or state
        const gameId = '4'; 
    
        Axios.post("http://localhost:8081/user/add-to-wishlist", { userId, gameId })
            .then(response => {
                if (response.data.success) {
                    setWishlistAdded(true);
                }
            })
            .catch(error => {
                console.log("Error adding to wishlist:", error);
                alert('Failed to add to wishlist');
            });
    };

    return (
        <div className='gameDetails'>
            <h1>About Resident Evil</h1>
            <img src='/images/residentevilvillage.jpg' alt='Resident Evil Village' />
            <h3>Rating: {gameDetails.rating.toFixed(1)}</h3>
            <h2>--Reviews--</h2>
            <ul>
                {gameDetails.reviews.map(review => (
                    <li key={review.ReviewID}>{review.Comment} {review.UserID}</li>
                ))}
            </ul>
            <button onClick={addToWishlist} disabled={wishlistAdded}>
                {wishlistAdded ? 'Added to Wishlist' : 'Add to Wishlist'}
            </button>
        </div>
    );
}
export default ResidentEvil;

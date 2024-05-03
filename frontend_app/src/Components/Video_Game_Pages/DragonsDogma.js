import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../../App.css';
import './Styles/GameHome.css'; //Import CSS file for styling


function DragonsDogma() {
    const [gameDetails, setGameDetails] = useState({ reviews: [], rating: 0 });
    const [wishlistAdded, setWishlistAdded] = useState(false);
    const [review, setReviews] = useState({
        comment: '',
        rating: ''
    });

    useEffect(() => {
        const gameId = '1';

        Axios.get(`http://localhost:8081/games/reviews?gameId=${gameId}`)
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
        const userId = '8'; // This should come from the user's session or state
        const gameId = '1';

        Axios.post("http://localhost:8081/user/add-to-wishlist", { userId, gameId})
            .then(response => {
                if (response.data.success) {
                    setWishlistAdded(true);
                    alert('Added to wishlist successfully.')
                }
            })
            .catch(error => {
                console.log("Error adding to wishlist:", error);
                alert('Failed to add to wishlist');
            });
    };

    const handleReviewInput = (event) => {
        event.persist();
        setReviews(prev => ({...prev, [event.target.name]:event.target.value}));
    }

    const addReview = () => {
        const userId = '8'; // This should come from the user's session or state
        const gameId = '1';
        const rating = review.rating;
        const comment = review.comment;

        if (rating > 100) {
            alert('Rating cannot be greater than 100.');
        }  else{
            Axios.post("http://localhost:8081/user/add-review", { userId, gameId, rating, comment})
            .then(response => {
                if (response.data.success) {
                    console.log("Review:", review);
                    alert('Added review successfully.');
                }
            })
            .catch(error => {
                console.log("Error adding review", error);
                alert('Failed to add review');
            });
        }
    };

    return (
        <div className='gameDetails'>
            <h1>About Dragon's Dogma 2</h1>
            <img src='/images/dragonsdogma2.jpg' alt='Dragons Dogma 2' />
            <h3>Rating: {gameDetails.rating.toFixed(1)}</h3>
            <h2>--Reviews--</h2>
            <ul>
                {gameDetails.reviews && gameDetails.reviews.map(review => (
                    <li key={review.ReviewID}>{review.Comment} {review.UserID}</li>
                ))}
            </ul>
            <button onClick={addToWishlist} disabled={wishlistAdded}>
                {wishlistAdded ? 'Added to Wishlist' : 'Add to Wishlist'}
            </button>
            <h1>Add a Review</h1>
            <h2>Comment</h2>
            <input type = "text" name = "comment" onChange = {handleReviewInput}/>
            <h2>Rating (1-100)</h2>
            <input type = "text" name = "rating" onChange = {handleReviewInput}/>
            <button onClick={addReview}>Add Review</button>
        </div>
    );
}

export default DragonsDogma;

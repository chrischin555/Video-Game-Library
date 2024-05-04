import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Profile.css'

<img src= '/images/gokustaring.jpg' alt="Goku Staring" />


function Profile() {
    const [userInfo, setUserInfo] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    const [reviews, setReviews] = useState([]);

    const currentUserEmail = localStorage.getItem('currentUser');

    useEffect(() => {
        if (currentUserEmail) {
            fetchUserInfo(currentUserEmail);
            fetchWishlist(currentUserEmail);
            fetchReviews(currentUserEmail);
        }
    }, [currentUserEmail]);

    const fetchUserInfo = (email) => {
        Axios.get(`http://localhost:8081/user/details?email=${email}`)
            .then(response => {
                setUserInfo(response.data);
            })
            .catch(error => console.error('Error fetching user info:', error));
    };

    const fetchWishlist = (email) => {
        Axios.get(`http://localhost:8081/user/wishlist?email=${email}`)
            .then(response => {
                setWishlist(response.data);
            })
            .catch(error => console.error('Error fetching wishlist:', error));
    };

    const fetchReviews = (email) => {
        Axios.get(`http://localhost:8081/user/reviews?email=${email}`)
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => console.error('Error fetching reviews:', error));
    };

    return (
        <div className="profile-container">
            <div className="profile-info">
                {userInfo && (
                    <div>
                        <img src='/images/gokustaring.jpg' alt="Goku Staring" />
                        <h3>{userInfo.Username}</h3>
                        <p>{userInfo.Email}</p>
                    </div>
                )}
            </div>
            <div className="wishlist-section">
                <h4 className="section-title">Wishlist</h4>
                <ul>
                    {wishlist.map(game => (
                        <li key={game.GameID}>{game.GameTitle}</li>
                    ))}
                </ul>
            </div>
            <div className="reviews-section">
                <h4 className="section-title">Reviews</h4>
                {reviews.map(review => (
                    <div className="review-item" key={review.ReviewID}>
                        <p>{review.GameTitle}: {review.Comment}</p>
                        <p className="review-rating">Rating: {review.Rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
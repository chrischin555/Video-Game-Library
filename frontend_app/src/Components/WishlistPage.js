import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        // Fetch wishlist items from the server when the component mounts
        Axios.get("http://localhost:8081/wishlist")
            .then(response => {
                setWishlistItems(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="wishlist-container">
            <h1>My Wishlist</h1>
            <ul className="wishlist-list">
                {wishlistItems.map(item => (
                    <li key={item.id} className="wishlist-item">
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Wishlist;

import React from 'react';

const Wishlist = () => {
    // Example static data for the Wishlist
    const wishlistItems = [
        { id: 1, title: "Persona" },
        { id: 2, title: "Resident Evil" },
        { id: 3, title: "Fire Emblem" }
    ];

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

import React, { useState, useEffect} from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleMenuClick = () => setClick(!click); //handles state of menu click; essentially reserves it (clicked or not)
    const closeMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() =>{
        showButton()
    },[])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick = {closeMenu}>
                        Game Library <i className=' fa-solid fa-gamepad'></i>
                    </Link>
                    <div className='menu-icon' onClick={handleMenuClick}>
                        <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/profile" className='nav-links' onClick={closeMenu}>
                                Profile
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/wishlist" className='nav-links' onClick={closeMenu}>
                                Wishlist
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/games" className='nav-links' onClick={closeMenu}>
                                Games
                            </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to="/login" className='nav-links-mobile' onClick={closeMenu}>
                            Sign Up/Sign In
                        </Link>
                    </li>
                    </ul>
                    {button && <Button buttonStyle = 'btn btn-primary btn-lg rounded-0'>Sign Up/Log In</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
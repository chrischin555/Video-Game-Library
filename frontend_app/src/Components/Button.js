import React from 'react'
//import './Button.css'
import { Link } from 'react-router-dom'

//const STYLES = ['btn--primary', 'btn--outline']
//const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    //type,
    //onClick,
    //buttonStyle,
    //buttonSize
}) => {
    //if button component has button style, then it will be the style we create for it. otherwise, set value to first option in styles array
    //const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    //if button component has button size, then it will be the size we create for it. otherwise, set value to first option in size array
    //const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        /*bootstrap used for button styling*/
        <Link to='/login' className='btn-mobile'>
            <button className='btn btn-secondary btn-lg rounded-0'><strong>{children}</strong></button>
        </Link>
    )

};
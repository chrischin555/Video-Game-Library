import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation from "./LoginValidation";

function Login() {
    const [values, setValues] = useState({ //validate email, password
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => { //handles user input for email and password
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value.trim()]}))
    }

    const handleSubmit = (event) => { //validates form submission; prevents user from entering NULL values for login or any invalid characters
        event.preventDefault();
        setErrors(validation(values));
    }

    // setting up the login form with email, password
    return (
        <div className='d-flex justify-content-center align-items-center' style={{
            backgroundColor: 'rgb(9, 117, 128)',
            height: '100vh', width: '100vw'
        }}>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter your email.' name='email'
                        onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter your password.' name='password'
                        onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-secondary w-100 rounded-0'><strong>Log In</strong></button>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create an Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login
import React, {useState} from 'react'
import Validation from './SignupValidation';
import Axios from  'axios'
import {Link, useNavigate} from 'react-router-dom';

//setting up sign up form
function Signup() {
    const [values, setValues] = useState({ //fields for setting username, email, password
        //userid: '',
        username: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value.trim()]}))
    }

    const handleSubmit = (event) => { //validates signup submission; prevents user from entering invalid characters
        event.preventDefault();
        const error = Validation(values)
        setErrors(error)
        if(error.username === "" && error.email === "" && error.password === ""){ //if errors are empty, no errors
            Axios.post("http://localhost:5000/signup", values) //pass values
            .then(res => {
                navigate('/login');
                console.log(res);
                console.log("Successfully added to the database.");
            })
            .catch(err => console.log(err));
        }
    }   
    
  return (
    <div className='d-flex justify-content-center align-items-center' style={{
        backgroundColor: 'rgb(9, 117, 128)',
        height: '100vh', width: '100vw' 
    }}>
        <div className='bg-white p-3 rounded w-25'>
        <h2>Sign Up</h2>
            <form onSubmit = {handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="username"><strong>Username</strong></label>
                    <input type="username" placeholder='Enter your username.' name ='username' 
                    onChange = {handleInput} className='form-control rounded-0'></input>   
                    {errors.username && <span className='text-danger'>{errors.username}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter your email.' name ='email' 
                    onChange = {handleInput} className='form-control rounded-0'></input>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter your password.' name ='password' 
                    onChange = {handleInput} className='form-control rounded-0'></input>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type ='submit' className='btn btn-secondary w-100 rounded-0'><strong>Sign Up</strong></button>
                <Link to= "/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup;

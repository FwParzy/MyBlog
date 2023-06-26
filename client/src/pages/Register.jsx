import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [err, setErr] = useState(null)

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const registerSubmit = async e => {
    e.preventDefault()

    let errors = [];

    // Define the fields to check and their corresponding error messages
    const fieldsToCheck = {
      username: 'Please enter a username',
      email: 'Please enter an email',
      password: 'Please enter a password'
    };

    // Loop over each field and check if it's empty
    for (let field in fieldsToCheck) {
      if (inputs[field] === '') {
        errors.push(fieldsToCheck[field]);
      }
    }

    if (errors.length > 0) {
      setErr(errors);
    } else {
      try {
        const res = await axios.post('/api/auth/register', inputs)
        console.log(res)
        setErr([]); // Clear any previous errors
      } catch (err) {
        setErr([err.response.data])
      }
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
        <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
        <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={registerSubmit}>Register</button>
        {err && err.map((error, index) => <p key={index}>{error}</p>)}
        <span>Do you have an account? <Link to="/login">Login</Link> </span>
      </form>
    </div>
  )
}

export default Register

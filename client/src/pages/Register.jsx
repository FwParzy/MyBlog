import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const validateInputs = (inputs) => {
    const fieldsToCheck = {
      username: 'Please enter a username',
      email: 'Please enter an email',
      password: 'Please enter a password'
    };
    let errors = [];
    for (let field in fieldsToCheck) {
      if (inputs[field] === '') {
        errors.push(fieldsToCheck[field]);
      }
    }
    return errors;
  };

  const registerSubmit = async e => {
    e.preventDefault();
    const errors = validateInputs(inputs);
    if (errors.length > 0) {
      setErr(errors);
    } else {
      try {
        await axios.post('/api/auth/register', inputs);
        navigate("/login")
        setErr([]); // Clear any previous errors
      } catch (err) {
        setErr([err.response.data.message]);
      }
    }
  };

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

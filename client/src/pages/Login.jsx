import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })
  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validateInputs = (inputs) => {
    const fieldsToCheck = {
      username: 'Please enter a username',
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

  const handleLogin = async e => {
    e.preventDefault();
    const errors = validateInputs(inputs);
    if (errors.length > 0) {
      setErr(errors);
    } else {
      try {
        await axios.post('/api/auth/login', inputs);
        navigate("/")
        setErr([]); // Clear any previous errors
      } catch (err) {
        setErr([err.response.data.message]);
      }
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="password" placeholder='password' name='password' onChange={handleChange} />
        <button onClick={handleLogin}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an account? <Link to="/register">Register</Link> </span>
      </form>
    </div>
  )
}

export default Login

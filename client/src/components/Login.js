import React, { useState } from 'react'
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom'

const Login = ({ setDashUser, DashUser }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    let res = await loginUser({ email: email, password: password });
      //  console.log("res",{ res })
    if (res.data.message === 'Invalid Credentials') {
      alert('Invalid Credentials');
      setEmail('');
      setPassword('');
    }
    else {
      alert('Welcome Back!');
      setDashUser(res.data)
      let set = localStorage.setItem('user', JSON.stringify(res.data));
      // console.log('set', set)
      navigate('/dashboard');
    }
  }

  return (

    <div className='form-container sign-in-container'>
      <form onSubmit={handleSumbit}>
        <h1>Log In</h1>
        <div className='social-container'>
          <a href='https://accounts.google.com/v3/signin/identifier?dsh=S1476874241%3A1671845289821508&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AeAAQh5BKueCFho_auul42Mg0krItcrrhUWpVWAfeYw_uIHxIitNW9R3lNF3ok9OuwqkuC2GJzV8hA' className='social'><i className="fa-brands fa-google"></i></a>
          <a href='https://www.linkedin.com/login' className='social'><i className="fa-brands fa-linkedin"></i></a>
          <a href='https://github.com/login' className='social'><i className="fa-brands fa-github"></i></a>
        </div>
        <span>or use your account</span>
        <input type='email' placeholder='Email' required name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' required name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <a href='/#'>Forget Passwoord?</a>
        <button type='submit'>Login</button>
      </form>
    </div>

  )
}

export default Login
import React, { useState } from 'react'
import { registerUser } from '../services/api';

const Signup = ({ setFlag }) => {

  const [user, setUser] = useState({
    name: "", email: "", role: "", salery: "", password: ""
  });


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    await registerUser(user);
    // console.log('result', res.data);
    alert(`congrats ${user.name} ! Registration successful,
    Now you can Login`);
    setFlag(false);

    setUser({ name: "", email: "", role: "", salery: "", password: "" });

  };

  return (

    <div className='form-container sign-up-container'>
      <form onSubmit={postData}>
        <h1>Sign Up</h1>
        <div className='social-container'>
          <a href='https://accounts.google.com/v3/signin/identifier?dsh=S1476874241%3A1671845289821508&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AeAAQh5BKueCFho_auul42Mg0krItcrrhUWpVWAfeYw_uIHxIitNW9R3lNF3ok9OuwqkuC2GJzV8hA' className='social'><i className="fa-brands fa-google"></i></a>
          <a href='https://www.linkedin.com/login' className='social'><i className="fa-brands fa-linkedin"></i></a>
          <a href='https://github.com/login' className='social'><i className="fa-brands fa-github"></i></a>
        </div>
        <span>or use your email for registration</span>
        <input type='text' placeholder='Name' required name='name' value={user.name} onChange={handleInput} />
        <input type='email' placeholder='Email' required name='email' value={user.email} onChange={handleInput} />
        <input type='text' placeholder='Role' required name='role' value={user.role} onChange={handleInput} />
        <input type='number' placeholder='Salery in LPA' required name='salery' value={user.salery} onChange={handleInput} />
        <input type='password' placeholder='Password' required name='password' value={user.password} onChange={handleInput} />
        <button type='submit'>Sign Up</button>
      </form>
    </div>

  )
}

export default Signup
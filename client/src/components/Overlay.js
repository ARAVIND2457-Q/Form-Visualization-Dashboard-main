import React from 'react'

// const container = document.getElementById('container');

// const handleSignUp = () => {
//     container.classList.add('right-panel-active');
// };

// const handleSignIn = () => {
//   container.classList.remove('right-panel-active');
// }

const Overlay = ( { setFlag }) => {
  return (
    <div className='overlay-container'>
      <div className='overlay'>
        <div className='overlay-panel overlay-left'>
          <h1>Welcome Back</h1>
          <p>Please login with your personal info</p>
          <button className='ghost' id='signIn' onClick={() => setFlag(false)}>Log In</button>
        </div>
        <div className='overlay-panel overlay-right'>
          <h1>Hello Friend</h1>
          <p>Enter your personal info to get Started</p>
          <button className='ghost' id='signUp' onClick={() => setFlag(true)}>Sign Up</button>
        </div> 
      </div>
    </div>
  )
}

export default Overlay
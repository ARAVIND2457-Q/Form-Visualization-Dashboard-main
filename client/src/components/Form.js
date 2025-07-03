import React, { useState } from 'react';
import Overlay from "./Overlay";
import Login from "./Login";
import Signup from "./Signup";
import './Form.css';

const Form = ( { setDashUser }) => {

  const [flag, setFlag] = useState(false);

  return (
    <div className='custom'>
      <div className={flag === true ? 'container right-panel-active' : 'container'} id='container'>
        <Signup setFlag={setFlag} />
        <Login setDashUser={setDashUser} />
        <Overlay setFlag={setFlag} />
      </div>
    </div>
  )
}

export default Form
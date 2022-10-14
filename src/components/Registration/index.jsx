import React from 'react'
import './index.css'

const Registration = () => {
  return (
    <div className='registration'>
      <h2>Registration</h2>
      <div className='registration_form'>
        <form>
            <input type="text" placeholder="Enter name" />
            <input type="email" placeholder="Enter email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password repeat" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Registration;
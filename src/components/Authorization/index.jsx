import React from 'react'
import './index.css'

const Authorization = () => {
  return (
    <div className="authorization">
      <h2>Authorization</h2>
      <div className='auth_form'>
        <form>
            <input type="email" placeholder="Enter email" />
            <input type="password" placeholder="Password" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Authorization;
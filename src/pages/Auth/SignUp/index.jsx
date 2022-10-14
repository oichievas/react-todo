import React from 'react'
import { Button } from 'components/Button'
import cls from './index.module.css'

const SignUp = () => {
  return (
    <div className={cls.registration}>
      <h2>Sign Up</h2>
      <div className={cls.registration_form}>
        <form>
          <input type="text" placeholder="Enter name" />
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password repeat" />
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
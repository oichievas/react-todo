import React from 'react'
import { Button } from 'components/Button'
import cls from './index.module.css'

const SignIn = () => {
  return (
    <div className={cls.authorization}>
      <h2>Sign In</h2>
      <div className={cls.auth_form}>
        <form>
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Password" />
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
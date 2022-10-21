import React from 'react'
import { Button } from 'components/Button'
import cls from './index.module.css'
import { Auth } from '../..'

const SignIn = () => {
  const {
    email,
    password,
    errors,
    isLoading,
    actions: {
      setEmail,
      setPassword,
      signIn,
    },
  } = Auth.Hooks.SignIn.use()

  const onSubmit = (e) => {
    e.preventDefault()

    signIn()
  }

  return (
    <div className={cls.authorization}>
      <h2>Sign In</h2>
      {
        errors && (
          <ul>
            {
              errors.map(err => (
                <li key={err.message}>{err.message}</li>
              ))
            }
          </ul>
        )
      }
      <div className={cls.auth_form}>
        <form>
          <input
            type="email"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />

          <Button
            disabled={isLoading}
            onClick={onSubmit}
          >Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default SignIn

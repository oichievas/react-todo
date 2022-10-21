import React from 'react'
import { Button } from 'components/Button'
import cls from './index.module.css'
import { Auth } from '..'

const SignUp = () => {
  const {
    isLoading,
    email,
    password,
    errors,
    actions: {
      setEmail,
      setPassword,
      signUp,
    },
  } = Auth.Hooks.SignUp.use()

  const onSubmit = (e) => {
    e.preventDefault()

    signUp()
  }

  return (
    <div className={cls.registration}>
      <h2>Sign Up</h2>
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
      <div className={cls.registration_form}>
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
          <div>
            <p>Если у вас есть аккаунт</p>
            <button onClick={signUp}>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp

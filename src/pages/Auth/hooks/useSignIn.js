import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '..'

const useSignIn = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [errors, setErrors] = React.useState(null)

  const navigate = useNavigate()

  const signIn = () => {
    const request = Auth.API.signIn({
      email,
      password,
      returnSecureToken: true,
    })

    setIsLoading(true)

    request
      .then(res => {
        localStorage.setItem('uid', res.data.localId)

        setEmail('')
        setPassword('')

        navigate('/')
      })
      .catch(err => {
        setErrors(err.response.data.error.errors)
      })
      .finally(() => setIsLoading(false))
  }

  return {
    email,
    password,
    isLoading,
    errors,
    actions: {
      setEmail,
      setPassword,
      signIn,
    },
  }
}

export const use = useSignIn

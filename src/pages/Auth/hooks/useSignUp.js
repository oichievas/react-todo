import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '..'

const useSignUp = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [errors, setErrors] = React.useState(null)

  const navigate = useNavigate()

  const signUp = () => {
    const request = Auth.API.signUp({
      email,
      password,
      returnSecureToken: true,
    })

    setIsLoading(true)

    request
      .then(() => {
        setEmail('')
        setPassword('')

        navigate('/auth/signin')
      })
      .catch(err => {
        setErrors(err.response.data.error.errors)
      })
      .finally(() => setIsLoading(false))
  }

  return {
    errors,
    isLoading,
    email,
    password,
    actions: {
      setEmail,
      signUp,
      setPassword,
    },
  }
}

export const use = useSignUp

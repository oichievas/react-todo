import { Button } from 'components/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotAuth = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Вы не авторизованы!</h1>
      <Button
        onClick={() => navigate('/auth/signin')}
      >Авторизоваться</Button>
    </div>
  )
}

import { Button } from 'components/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './NotAuth.module.css'

export const NotAuth = () => {
  const navigate = useNavigate()

  return (
    <div className={cls.root}>
      <div className={cls.card}>
        <h1>Вы не авторизованы!</h1>
        <Button
          onClick={() => navigate('/auth/signin')}
        >Авторизоваться</Button>
      </div>
    </div>
  )
}

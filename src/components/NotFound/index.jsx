import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <div>
      <h1>Страница не найдена!</h1>
      <button onClick={goBack}>Перейти назад</button>
    </div>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './index.module.css'

export const NotFound = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <div className={cls.not_found}>
      <div className={cls.image}>
        <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=500w" alt="" />
      </div>
      <div className={cls.text}>
        <h1>Страница не найдена!</h1>
        <h1>AWWW...DON’T CRY.</h1>
        <h3>It's just a 404 Error! </h3>
        <button onClick={goBack}>Перейти назад</button>
        </div>
    </div>
  )
}

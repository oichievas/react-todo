import { NotAuth } from 'components/NotAuth'
import { Spinner } from 'components/Spinner'
import { Main } from 'pages/Main'
import { Todos } from 'pages/Main/components/Todos'
import React from 'react'
import Form from '../../components/Form'
import { Navbar } from '../../components/Navbar'
import cls from './Main.module.css'

export const MainPage = () => {
  const todoParams = Main.Hooks.MainPage.use()

  const uid = localStorage.getItem('uid')

  if (!uid) return <NotAuth />

  return (
    <div>
      <Navbar signOut={todoParams.actions.signOut} />
      <div className={cls.container}>
        <h1 className={cls.title}>TodoList</h1>
        <Form getTodos={todoParams.actions.getTodos} />
        <Todos todoParams={todoParams} />
      </div>
    </div>
  )
}

export default MainPage

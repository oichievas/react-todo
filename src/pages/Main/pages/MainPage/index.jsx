import { NotAuth } from 'components/NotAuth'
import { Main } from 'pages/Main'
import React from 'react'
import Form from '../../components/Form'
import { Navbar } from '../../components/Navbar'
import cls from './Main.module.css'

export const MainPage = () => {
  const {
    todos,
    allComplete,
    actions: {
      completeTodo,
      editTodo,
      removeTodo,
      signOut,
    },
  } = Main.Hooks.MainPage.use()

  const uid = localStorage.getItem('uid')

  if (!uid) return <NotAuth />

  return (
    <div className={cls.root}>
      <Navbar signOut={signOut} />
      <div className={cls.container}>
        <h1 className={cls.title}>TodoList</h1>
        <Form />
        <ul className={cls.todos}>
          {
            todos.map(todo => {
              return (
                <li
                  className={todo.done ? `${cls.todo} ${cls.done}` : cls.todo}
                  key={todo.id}
                  onClick = {() => completeTodo(todo.id)}
                >
                  {todo.text}
                  <div className={cls.icons}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/274/274713.png"
                      alt="edit"
                      onClick={e => {
                        e.stopPropagation()
                        editTodo(todo.id)
                      }}
                    />

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                      alt="delete"
                      onClick={e => {
                        e.stopPropagation()
                        removeTodo(todo.id)
                      }}
                    />
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className={cls.info}>
          <span>Todos count: {todos.length} </span>
          <span>Completed: {allComplete} </span>
        </div>
      </div>
    </div>
  )
}

export default MainPage

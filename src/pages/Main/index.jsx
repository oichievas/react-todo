import { NotAuth } from 'components/NotAuth'
import React from 'react'
import Form from './components/Form'
import { useMain } from './hooks/useMain'
import cls from './Main.module.css'

export const MainPage = () => {
  const {
    todos,
    allComplete,
    actions: {
      createTodo,
      completeTodo,
      editTodo,
      removeTodo,
      signOut,
    },
  } = useMain()

  const uid = localStorage.getItem('uid')

  if (!uid) return <NotAuth />

  return (
    <div className={cls.wrapper}>
      <div className={cls.signOut}>
        <button onClick={signOut}>Sign out</button>
      </div>
      <div className={cls.container}>
        <h1 className={cls.title}>TodoList</h1>
        <Form
          createTodo={createTodo}
        />
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
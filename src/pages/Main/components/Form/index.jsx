import { Main } from 'pages/Main'
import React from 'react'
import cls from './Form.module.css'

const Form = ({
  getTodos,
}) => {
  const {
    actions: {
      createTodo,
      setText,
    },
    text,
    isLoading,
  } = Main.Hooks.Form.use()

  return (
    <form
      className={cls.form}
      onSubmit={e => {
        e.preventDefault()

        createTodo()
          .then(getTodos)
      }}
    >
      <input
        disabled={isLoading}
        placeholder="Bведите текст"
        className={cls.input}
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </form>
  )
}

export default Form

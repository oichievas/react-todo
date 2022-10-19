import React from 'react'
import cls from './Form.module.css'

const Form = ({ createTodo }) => {
  const [value, setValue] = React.useState('')

  return (
    <form
      className={cls.form}
      onSubmit={e => {
        e.preventDefault()

        createTodo(value)
        setValue('')
      }}
    >
      <input
        placeholder="Bведите текст"
        className={cls.input}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

export default Form

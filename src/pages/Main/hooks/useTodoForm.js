import React from 'react'
import { Main } from '..'

const useTodoForm = () => {
  const uid = localStorage.getItem('uid')

  const [text, setText] = React.useState('')

  const [isLoading, setIsLoading] = React.useState(false)

  const createTodo = () => {
    if (!text) return alert('Введите текст!')

    if (text.length < 5) return alert('Текст должен быть более 4 символов')

    if (text.length > 100) return alert('Текст должен быть меньше 100 символов')

    const request = Main.API.postTodo(uid, {
      text,
      done: false,
      date: new Date().toISOString(),
      isEdited: false,
    })

    setIsLoading(true)

    return request
      .finally(() => {
        setIsLoading(false)
        setText('')
      })
  }

  return {
    isLoading,
    text,
    actions: {
      createTodo,
      setText,
    },
  }
}

export const use = useTodoForm

import { parseObjToArr } from 'helpers'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Main } from '..'

const useMain = () => {
  const [todos, setTodos] = React.useState([])
  const [allComplete, setAllComplete] = React.useState(0)
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = React.useState(false)

  const uid = localStorage.getItem('uid')

  const getTodos = () => {
    const request = Main.API.getTodos(uid)

    setIsLoading(true)

    request
      .then(res => {
        const data = res.data

        if (!data) return setTodos([])

        setTodos(parseObjToArr(data).reverse())
      })
      .finally(() => setIsLoading(false))
  }

  const completeTodo = (id) => {
    todos.forEach(todo => {
      if (todo.id !== id) return

      const body = {
        done: !todo.done,
      }

      const request = Main.API.editTodo(uid, id, body)

      request
        .then(getTodos)
    })
  }

  const removeTodo = (id) => {
    const askTodo = confirm('Вы действительно хотите удалить данную задачу?')

    if (!askTodo) return

    const request = Main.API.removeTodo(uid, id)

    request
      .then(getTodos)
  }

  const editTodo = (id) => {
    todos.forEach(todo => {
      if (todo.id !== id) return

      const askNewText = prompt('Изменить текст', todo.text)

      if (!askNewText) return

      // if (todo.text.length < 5) return alert('Текст должен быть более 4 символов')
      // if (todo.text.length > 100) return alert('Текст должен быть меньше 100 символов')

      const request = Main.API.editTodo(uid, id, {
        text: askNewText,
        isEdited: new Date().toISOString(),
      })

      request
        .then(getTodos)
    })
  }

  const signOut = () => {
    const signOut = confirm('Вы уверены сделать выход?')
    if (signOut) {
      localStorage.removeItem('uid')
      navigate('/auth/signin')
    }
  }

  React.useEffect(getTodos, [])

  React.useEffect(() => {
    setAllComplete(
      todos.reduce((prev, current) => current.done ? prev + 1 : prev, 0),
    )
  }, [todos])

  return {
    todos,
    allComplete,
    isLoading,
    actions: {
      completeTodo,
      editTodo,
      removeTodo,
      signOut,
      getTodos,
    },
  }
}

export const use = useMain

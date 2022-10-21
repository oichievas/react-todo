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

        setTodos(parseObjToArr(data))
      })
      .finally(() => setIsLoading(false))
  }

  const completeTodo = (id) => {
    setTodos(prev => {
      return prev.map(todo => {
        if (todo.id !== id) return todo

        return {
          ...todo,
          done: !todo.done,
        }
      })
    })
  }

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const editTodo = (id) => {
    setTodos(prev => {
      return prev.map(todo => {
        if (todo.id !== id) return todo

        return {
          ...todo,
          text: prompt('Изменить текст', todo.text) || todo.text,
        }
      })
    })
  }

  const signOut = () => {
    const signOut = confirm('Вы уверены сделать выход?')
    if (signOut) {
      localStorage.removeItem('uid')
      navigate('/auth/signin')
    }
  }

  React.useEffect(() => {
    getTodos()
  }, [])

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

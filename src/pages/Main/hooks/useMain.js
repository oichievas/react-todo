import React from 'react'
import { idGenerator } from 'helpers'
import { useNavigate } from 'react-router-dom'

export const useMain = () => {
  const [todos, setTodos] = React.useState([])
  const [allComplete, setAllComplete] = React.useState(0)
  const navigate = useNavigate()

  React.useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('todos'))

    storageTodos && setTodos(storageTodos)
  }, [])

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

    setAllComplete(
      todos.reduce((prev, current) => current.done ? prev + 1 : prev, 0),
    )
  }, [todos])

  const createTodo = (text) => {
    if (!text) return alert('Введите текст!')

    if (text.length < 5) return alert('Текст должен быть более 4 символов')

    if (text.length > 20) return alert('Текст должен быть меньше 20 символов')

    setTodos(prev => [...prev, {
      id: idGenerator(prev),
      text,
      done: false,
    }])
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

  return {
    todos,
    allComplete,
    actions: {
      createTodo,
      completeTodo,
      editTodo,
      removeTodo,
      signOut,
    },
  }
}

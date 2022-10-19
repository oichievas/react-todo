import { idGenerator } from 'helpers'
import React from 'react'

export default function useMain() {

  const [todos, setTodos] = React.useState([])
  const [allComplete, setAllComplete] = React.useState(0)
  
  React.useEffect(() => {
    setAllComplete(
      todos.reduce((prev, current) => current.done ? prev + 1 : prev, 0)
    )
  }, [todos])

  const createTodo = (text) => {
    if (!text) return alert('Введите текст!')

    if (text.length < 5) return alert('Текст должен быть более 4 символов')

    if (text.length > 100) return alert('Текст должен быть меньше 100 символов')

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
          done: !todo.done
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
          text: prompt('Изменить текст', todo.text)
        }
      })
    })
  }

  return {
    todos,
    allComplete,
    actions: {
      createTodo,
      completeTodo,
      editTodo,
      removeTodo
    }
  }
} 

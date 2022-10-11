import React from 'react'
import Form from './components/Form'
import './App.css'
import Test from './components/Test'
import { idGenerator } from './helpers'

function App() {
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

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title"> TodoList </h1>
        <Form 
          putTodo={createTodo}
        />
        <ul className="todos">
          {
            todos.map(todo => {
              return(
                <li 
                  className={todo.done ? 'todo done' : 'todo'}
                  key={todo.id}
                  onClick = {() => completeTodo(todo.id)}
                  >
                  {todo.text}
                  <div className='icons'>
                    <img src='https://cdn-icons-png.flaticon.com/512/274/274713.png' alt='edit'
                      onClick={
                      e => {
                      e.stopPropagation()
                      editTodo(todo.id)
                    }
                  } />
                    <img src='https://cdn-icons-png.flaticon.com/512/6861/6861362.png' alt='delete' 
                      onClick={
                      e => {
                      e.stopPropagation()
                      removeTodo(todo.id)
                    }
                  } />
                  </div>
                </li>
              )
            })
          }
          <div className='info'>
            <span>Todos count: {todos.length} </span>
            <span>Completed: {allComplete} </span>
          </div>
        </ul>
      </div>

      <Test />
    </div>
  )
}

export default App
import { useEffect, useState } from 'react';
import Form from '../Form/Form';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(0);
  const [allComplete, setAllComplete] = useState(0);

  useEffect(() => {
    setAllComplete(todos.filter(todo => todo.done === true).length)
  }, [todos])

  const putTodo = (value) => {
    if(value) {
      setTodos([...todos, {id: Date.now(), text: value, done: false}]);
      setAllTodos(allTodos + 1);
      console.log(todos)
    } else {
      alert("Введите текст!")
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo;

      return {
        ...todo,
        done: !todo.done
      }
    }))
  }
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setAllTodos(allTodos - 1);
  }

  const editTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        let changedText = prompt("Изменить текст");
        if(changedText.length !== 0) {
          todo.text = changedText
        } 
        
      }
      return todo
    })

    setTodos(updatedTodos) 
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title"> TodoList </h1>
        <Form 
          putTodo={putTodo}
        />
        <ul className="todos">
          {
            todos.map(todo => {
              return(
                <li 
                  className={todo.done ? "todo done" : "todo"} 
                  key={todo.id}
                  onClick = {() => toggleTodo(todo.id)}
                  >
                  {todo.text}
                  <div className='icons'>
                    <img src=' https://cdn-icons-png.flaticon.com/512/274/274713.png' alt='edit'
                      onClick={
                      e => {
                      e.stopPropagation();
                      editTodo(todo.id)
                    }
                  } />
                    <img src='https://cdn-icons-png.flaticon.com/512/6861/6861362.png' alt='delete' 
                      onClick={
                      e => {
                      e.stopPropagation();
                      removeTodo(todo.id)
                    }
                  } />
                  </div>
                </li>
              )
            })
          }
          <div className='info'>
            <span>All todos: {allTodos} </span>
            <span>Completed: {allComplete} </span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import { Spinner } from 'components/Spinner'
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from 'react-icons/ai'
import cls from './Todos.module.css'


export const Todos = ({
  todoParams,
}) => {
  const {
    isLoading,
    todos,
    allComplete,
    actions: {
      completeTodo,
      editTodo,
      removeTodo,
    },
  } = todoParams

  if (isLoading) return <Spinner />

  if (!todos.length) return <h1 className={cls.emptyTodos}>Список задач пуст!</h1>

  return (
    <ul className={cls.todos}>
      {
        todos.map(({ done, isEdited, id, text }) => {
          return (
            <div key={id} className={done ? `${cls.todo} ${cls.done}` : cls.todo}>
              <li>
                <div className={cls.todoText}>
                  <span>{text}</span>
                  {/* <span className={cls.createdText}>
                        Создан &nbsp;
                    {new Date().toLocaleString()}
                  </span> */}
                  {
                    isEdited ? (
                      <span className={cls.editedText}>
                        Изменен &nbsp;
                        {new Date(isEdited).toLocaleString()}
                      </span>
                    ) : (
                      <span className={cls.createdText}>
                        Создан &nbsp;
                        {new Date().toLocaleString()}
                      </span>
                    )
                    //
                    // isEdited &&
                    //   <span className={cls.editedText}>
                    //     Изменен &nbsp;
                    //     {new Date(isEdited).toLocaleString()}
                    //   </span>
                  }
                </div>
                <div className={cls.icons}>
                  <AiOutlineCheck
                    onClick={() => completeTodo(id)}
                  />
                  <AiOutlineEdit
                    onClick={() => editTodo(id)}
                  />

                  <AiOutlineDelete
                    onClick={() => removeTodo(id)}
                  />
                </div>
              </li>
            </div>
          )
        })
      }
      <div className={cls.info}>
        <span>Todos count: {todos.length} </span>
        <span>Completed: {allComplete} </span>
      </div>
    </ul>
  )
}

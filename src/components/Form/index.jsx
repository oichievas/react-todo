import { useState } from 'react'
import cls from './Form.module.css'

const Form = (props) => {
  const [value, setValue] = useState("")

  return (
    <form 
      className={cls.form}
      onSubmit={e => { 
      e.preventDefault()
      props.createTodo(value)
      setValue("")
      }}
    >
      <input 
        type="text" 
        placeholder="Bведите текст" 
        value={value} 
        onChange={e => 
          setValue(e.target.value)} />
    </form>
  )
}

export default Form
import React from 'react'
import cls from './index.module.css'

export default function Button({children, ...rest}) {
  return (
    <button 
      className={cls.root}
      {...rest}
    >{children}</button>
  )
}

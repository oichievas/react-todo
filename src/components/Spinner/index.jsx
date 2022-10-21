import React from 'react'
import cls from './Spinner.module.css'

export const Spinner = () => {
  return (
    <div className={cls.container}>
      <div className={cls.root}><div></div><div></div><div></div><div></div></div>
    </div>

  )
}

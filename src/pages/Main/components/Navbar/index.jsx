import React from 'react'
import cls from './Navbar.module.css'
import { RiLogoutCircleRLine } from 'react-icons/ri'

export const Navbar = ({
  signOut,
}) => {
  return (
    <nav className={cls.root}>
      <button onClick={signOut}>
        <RiLogoutCircleRLine />
        Выйти
      </button>
    </nav>
  )
}

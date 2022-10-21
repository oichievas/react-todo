import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from 'components/NotFound'
import { Auth } from '.'

export const AuthLayout = () => {
  return (
    <Routes>
      <Route path="signin" element={<Auth.Pages.SignIn />} />
      <Route path="signup" element={<Auth.Pages.SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

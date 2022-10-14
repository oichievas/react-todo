import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './SignIn'
import { NotFound } from 'components/NotFound'
import SignUp from './SignUp'

export const AuthLayout = () => {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

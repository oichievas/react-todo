import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from '../../components/NotFound'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function AuthLayout() {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} /> 
  </Routes>
  )
}

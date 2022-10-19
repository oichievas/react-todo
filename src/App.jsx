import { MainPage } from 'pages/Main'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import AuthLayout from './pages/Auth/AuthLayout'

function App() {
  
  return(
    <Routes>
      <Route path="/" element={<MainPage /> } />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App
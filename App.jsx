import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Donate from './pages/Donate'
import Developers from './pages/Developers'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/features' element={<Features/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/donate' element={<Donate/>} />
          <Route path='/developers' element={<Developers/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

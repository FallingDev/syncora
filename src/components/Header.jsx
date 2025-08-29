import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header(){
  const navigate = useNavigate()
  return (
    <header className="bg-transparent border-b border-white/5">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-['var(--accent)'] text-indigo-400">Syncora</div>
          <nav className="hidden md:flex gap-4">
            <Link to="/features" className="text-sm text-white/90">Features</Link>
            <Link to="/pricing" className="text-sm text-white/90">Pricing</Link>
            <Link to="/developers" className="text-sm text-white/90">Developers</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={()=>navigate('/login')} className="px-3 py-1 rounded bg-white/5">Sign in</button>
          <button onClick={()=>navigate('/register')} className="px-3 py-1 rounded bg-indigo-600 text-white">Register</button>
        </div>
      </div>
    </header>
  )
}

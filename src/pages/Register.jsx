import React, { useState } from 'react'
import API from '../utils/api'
import { useNavigate } from 'react-router-dom'
export default function Register(){
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const nav = useNavigate()
  const submit = async ()=>{
    try{
      await API.post('/auth/register', { username, email, password })
      setMsg('Registered! Please sign in.')
      setTimeout(()=>nav('/login'),800)
    }catch(e){console.error(e); setMsg('Register failed')}
  }
  return (
    <section className="container max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <div className="bg-white/3 p-4 rounded">
        <input className="w-full p-2 rounded mb-2 bg-transparent border" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
        <input className="w-full p-2 rounded mb-2 bg-transparent border" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full p-2 rounded mb-2 bg-transparent border" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button onClick={submit} className="px-3 py-2 bg-indigo-600 rounded text-white">Create account</button>
        <div className="mt-2 text-white/80">{msg}</div>
      </div>
    </section>
  )
}

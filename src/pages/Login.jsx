import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../utils/api'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const nav = useNavigate()
  const submit = async ()=>{
    try{
      const res = await API.post('/auth/login', { email, password })
      const data = res.data
      localStorage.setItem('syncora_token', data.token)
      localStorage.setItem('syncora_user', JSON.stringify(data.user))
      setMsg('Logged in!')
      setTimeout(()=>nav('/dashboard'),400)
    }catch(e){
      console.error(e); setMsg('Login failed')
    }
  }
  return (
    <section className="container max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign in</h2>
      <div className="bg-white/3 p-4 rounded">
        <input className="w-full p-2 rounded mb-2 bg-transparent border" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full p-2 rounded mb-2 bg-transparent border" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button onClick={submit} className="px-3 py-2 bg-indigo-600 rounded text-white">Sign in</button>
        <div className="mt-2 text-white/80">{msg}</div>
      </div>
    </section>
  )
}

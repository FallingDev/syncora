import React, { useState } from 'react'
import API from '../utils/api'

export default function Donate(){
  const [txn, setTxn] = useState('')
  const [msg, setMsg] = useState('')
  const submit = async ()=>{
    const planId = 1 // default demo; let user choose in real app
    try{
      const res = await API.post('/payments/submit', { userId: window.__SYNCORA_USER_ID__ || null, transactionId: txn, planId })
      setMsg('Submitted! Await verification.')
    }catch(e){
      console.error(e)
      setMsg('Failed to submit. Make sure you are logged in and backend configured.')
    }
  }
  return (
    <section className="container">
      <h2 className="text-2xl font-bold mb-4">Donate / Upgrade</h2>
      <p className="text-white/80 mb-4">Click the PayPal button to donate. After the payment completes, paste the transaction ID below to claim your plan.</p>
      <div className="flex gap-3 mb-3">
        <a className="px-3 py-2 bg-indigo-600 rounded text-white" href="https://paypal.me/sxr11?amount=2.99" target="_blank">Donate $2.99 (Core Light)</a>
        <a className="px-3 py-2 bg-indigo-600 rounded text-white" href="https://paypal.me/sxr11?amount=7.99" target="_blank">Donate $7.99 (Core)</a>
      </div>
      <div className="bg-white/3 p-4 rounded">
        <input className="w-full p-2 rounded mb-2 bg-transparent border" placeholder="PayPal transaction ID" value={txn} onChange={e=>setTxn(e.target.value)} />
        <button onClick={submit} className="px-3 py-2 bg-indigo-600 rounded">Submit Txn ID</button>
        <div className="mt-2 text-white/80">{msg}</div>
      </div>
    </section>
  )
}

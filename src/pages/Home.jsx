import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <section className="container">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Syncora — communities that move with you</h1>
          <p className="text-white/80 mb-6">Realtime chat, servers, voice rooms, badges, and premium perks with Syncora Core Light & Core.</p>
          <div className="flex gap-3">
            <Link to="/pricing" className="px-4 py-2 bg-indigo-600 rounded">See plans</Link>
            <Link to="/features" className="px-4 py-2 border rounded">Features</Link>
          </div>
        </div>
        <div className="bg-white/3 p-6 rounded-lg">
          <h3 className="font-semibold">Quick start</h3>
          <ol className="mt-2 list-decimal list-inside text-white/80">
            <li>Register an account</li>
            <li>Create a server</li>
            <li>Invite friends and chat in channels</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

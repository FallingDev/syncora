import React from 'react'
export default function Dashboard(){
  const user = JSON.parse(localStorage.getItem('syncora_user') || 'null')
  return (
    <section className="container">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {user ? (
        <div className="bg-white/3 p-4 rounded">
          <div className="font-semibold">{user.username}</div>
          <div className="text-white/80">Core status: {user.isCore ? 'Active' : 'Free'}</div>
          <div className="mt-3">Actions coming: Create server, join server, messages, settings.</div>
        </div>
      ) : (
        <div className="bg-white/3 p-4 rounded">Please sign in to view your dashboard.</div>
      )}
    </section>
  )
}

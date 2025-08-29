import React from 'react'
const contributors = [
  { role: 'Lead Dev', name: 'Coral', handle: 'coral' },
  { role: 'Main Dev', name: 'Killstreak', handle: 'killstreak' },
]

export default function Developers(){
  return (
    <section className="container">
      <h2 className="text-2xl font-bold mb-4">Developers & Contributors</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {contributors.map(c => (
          <div key={c.handle} className="bg-white/3 p-4 rounded">
            <div className="font-semibold">{c.role}</div>
            <div className="text-lg">{c.name} <span className="text-white/60">@{c.handle}</span></div>
            <div className="text-white/80 mt-2">Thanks for building Syncora. More contributors will be listed here.</div>
          </div>
        ))}
      </div>
    </section>
  )
}

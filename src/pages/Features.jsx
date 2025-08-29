import React from 'react'
export default function Features(){
  const fundamentals = [
    'Accounts & authentication',
    'Servers (guilds) with channels',
    'Text messaging with edits & reactions',
    'Direct messages and presence',
    'Badges & roles',
    'Friend system & invites'
  ]
  const qol = [
    'Emoji picker & custom emoji packs',
    'Message search & jump to mentions',
    'Pin messages & threads',
    'Upload previews & larger limits for Core',
    'Offline caching & fast reconnection'
  ]
  return (
    <section className="container">
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/3 p-4 rounded">
          <h4 className="font-semibold">Fundamental</h4>
          <ul className="mt-2 list-disc list-inside text-white/80">
            {fundamentals.map(f => <li key={f}>{f}</li>)}
          </ul>
        </div>
        <div className="bg-white/3 p-4 rounded">
          <h4 className="font-semibold">Quality of Life</h4>
          <ul className="mt-2 list-disc list-inside text-white/80">
            {qol.map(f => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer(){
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">© Syncora — Built by your team</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link to="/pricing" className="text-sm text-white/90">Pricing</Link>
          <Link to="/donate" className="text-sm text-white/90">Donate</Link>
          <Link to="/developers" className="text-sm text-white/90">Contributors</Link>
        </div>
      </div>
    </footer>
  )
}

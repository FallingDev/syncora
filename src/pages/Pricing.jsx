import React from 'react'
export default function Pricing(){
  return (
    <section className="container">
      <h2 className="text-2xl font-bold mb-6">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-4 bg-white/3 rounded">
          <div className="font-semibold">Free</div>
          <div className="text-2xl font-bold mt-2">$0</div>
          <ul className="mt-2 text-white/80 list-disc list-inside">
            <li>8 MB uploads</li>
            <li>Basic badges & roles</li>
          </ul>
        </div>
        <div className="p-4 bg-indigo-700 rounded text-white">
          <div className="font-semibold">Syncora Core Light</div>
          <div className="text-2xl font-bold mt-2">$2.99 / month</div>
          <ul className="mt-2 list-disc list-inside">
            <li>25 MB uploads</li>
            <li>Custom name color</li>
            <li>Core Light badge</li>
          </ul>
          <div className="mt-4">
            <a className="px-3 py-2 bg-white text-indigo-700 rounded" href="https://paypal.me/sxr11?amount=2.99" target="_blank">Donate $2.99</a>
          </div>
        </div>
        <div className="p-4 bg-white/3 rounded">
          <div className="font-semibold">Syncora Core</div>
          <div className="text-2xl font-bold mt-2">$7.99 / month</div>
          <ul className="mt-2 text-white/80 list-disc list-inside">
            <li>250 MB uploads</li>
            <li>Animated Core badge</li>
            <li>Priority server creation</li>
          </ul>
          <div className="mt-4">
            <a className="px-3 py-2 bg-indigo-600 text-white rounded" href="https://paypal.me/sxr11?amount=7.99" target="_blank">Donate $7.99</a>
          </div>
        </div>
      </div>
    </section>
  )
}

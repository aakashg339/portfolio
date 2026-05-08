import { useState } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import About from './components/about/About'

function App() {

  return (
    <>
      <div className='<div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 transition-colors">'>
        <Hero />
        <About />
      </div>
    </>
  )
}

export default App

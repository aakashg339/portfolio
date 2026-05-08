import { useState } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'

function App() {

  return (
    <>
      <div className='min-h-screen bg-linear-to-br from-slate-50 to-slate-100 transition-colors'>
        <Hero />
        <About />
        <Experience />
        <Education />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ThemeToggleButton from './components/ThemeTogglebutton'

function App() {

  return (
    <>
      <div className='min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors'>
        <Navbar />
        <ThemeToggleButton />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App

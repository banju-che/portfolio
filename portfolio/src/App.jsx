import React from 'react'
import './App.css';
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'



function App() {
  return (
    <main className='bg-yellow-50'>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
 export default App
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Works from './components/Work/Works'
import Experience from './components/Experience/Experience'

import './App.css'

function App() {

  return (
    <div className='bg-[#050414]'>
      <div>

      </div>
      <div className='absolute inset-0 bg-[linear-gradient(to_right,4f4f)], linear-gradient(to_bottom,#4f4f4f2e_1px, tra) '>
      <Navbar/>
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Works from './components/Work/Works'
import Experience from './components/Experience/Experience'
import BlurBlob from './BlurBlob'
function App() {

  return (
    <div className='relative bg-[#050414]'>
      <BlurBlob position={{top:'35%', left:'20%'}} size={{with:'30', height:'40%'}}/>
      
      <div className="relative pt-20">
        <Navbar/>
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
      <Education/>
      <Works/>
      </div>
    </div>
  )
}

export default App

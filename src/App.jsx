import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'
import Experiences from './sections/Experiences'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import './App.scss'

// Import your components
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Interests from './components/Interests/Interests'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Interests />
      <Contact />
      <Footer />
    </>
  )
}

export default App

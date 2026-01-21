import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/Sections/HeroSection'
import SkillsSection from './components/Sections/SkillsSection'


function App() {


  return (
    <>
      <ThemeProvider>
        <div className='pb-[100vh]'>
          <Navbar />
          <HeroSection />
          <SkillsSection />
        </div>

      </ThemeProvider>
    </>
  )
}

export default App

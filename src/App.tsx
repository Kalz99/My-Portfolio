import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/Sections/HeroSection'


function App() {
 

  return (
    <>
      <ThemeProvider>
        <div>
          <Navbar/>
          <HeroSection/>
        </div>
       
       </ThemeProvider>
    </>
  )
}

export default App

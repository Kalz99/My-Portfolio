import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/Sections/HeroSection'
import SkillsSection from './components/Sections/SkillsSection'
import ProjectsSection from './components/Sections/ProjectsSection'
import JourneySection from './components/Sections/JourneySection'
import ContactSection from './components/Sections/ContactSection'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <ThemeProvider>
        <div>
          <Navbar />
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <JourneySection />
          <ContactSection />
          <Footer />
        </div>

      </ThemeProvider>
    </>
  )
}

export default App

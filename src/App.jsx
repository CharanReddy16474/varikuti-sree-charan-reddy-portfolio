import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Process from './components/Process'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between selection:bg-[#ff2a2a] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <TechnicalSkills />
        <Process />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

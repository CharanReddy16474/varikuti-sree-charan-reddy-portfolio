import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App

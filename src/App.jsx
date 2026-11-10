import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Offers from './components/Offers'
import Coaches from './components/Coaches'
import Branches from './components/Branches'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#0e0e0e] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Offers />
      <Coaches />
      <Branches />
      <Contact />
      <Footer />
    </div>
  )
}

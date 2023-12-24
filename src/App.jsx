import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import './App.scss'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import { Home, About, Services, Portfolio } from './components/pages'

const App = () => {
  return (
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Research from './components/Research.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const Divider = () => (
  <div className="max-w-5xl mx-auto px-8">
    <div className="h-px bg-gray-100" />
  </div>
)

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Research />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </div>
  )
}

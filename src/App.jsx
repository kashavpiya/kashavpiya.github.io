import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'

const Divider = () => <div className="max-w-5xl mx-auto px-8"><div className="h-px bg-gray-100" /></div>

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
    </div>
  )
}

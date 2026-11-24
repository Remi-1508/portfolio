import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Future from './components/Future.jsx'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import CV from './components/CV.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data.js'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Future />
        <Skills />
        <Project />
        <CV />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Fait avec React & Vite · Bordeaux</span>
        </div>
      </footer>
    </>
  )
}

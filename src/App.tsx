import { lazy, Suspense } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AnimatedBackground from './components/AnimatedBackground'

// Lazy load components that are below the fold
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App

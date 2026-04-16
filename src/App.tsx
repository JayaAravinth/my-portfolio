import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Contact = lazy(() => import('./components/Contact'))
const About = lazy(() => import('./components/About'))
const Footer = lazy(() => import('./components/Footer'))

type Route = 'home' | 'contact' | 'projects' | 'about';

const getRoute = (): Route => {
  const h = window.location.hash;
  if (h === '#/contact') return 'contact';
  if (h === '#/projects') return 'projects';
  if (h === '#/about') return 'about';
  return 'home';
};

function App() {
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        {route === 'contact' && (
          <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
            <Contact />
          </Suspense>
        )}
        {route === 'projects' && (
          <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
            <Projects detailed />
          </Suspense>
        )}
        {route === 'about' && (
          <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
            <About />
          </Suspense>
        )}
        {route === 'home' && (
          <>
            <Hero />
            <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
              <Projects />
              <Experience compact />
              <Skills compact />
            </Suspense>
          </>
        )}
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App

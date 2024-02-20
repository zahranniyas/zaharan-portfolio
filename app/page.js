import Hero from './components/Hero';
import NavBar from './components/NavBar';
import About from './components/About'
import Stats from './components/Stats'
import TechBar from './components/TechBar';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Stats />
      <About />
      <TechBar />
      <Projects />
      <Contact />
    </main>
  );
}

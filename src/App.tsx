import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <WhyWorkWithMe />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
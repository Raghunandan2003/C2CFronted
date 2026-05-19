import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Programs from './components/Programs';
import StatsBanner from './components/StatsBanner';
import WhyUs from './components/WhyUs';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Placements from './components/Placements';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  useEffect(() => {
    const revealCards = document.querySelectorAll('.reveal-card');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Programs />
      <StatsBanner />
      <WhyUs />
      <Courses />
      <Testimonials />
      <Placements />
      <Process />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;

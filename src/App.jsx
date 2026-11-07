import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Brands from './components/Brands';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Solutions from './components/Solutions';
import Packages from './components/Packages';
import NetMetering from './components/NetMetering';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLeads from './components/AdminLeads';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(() => window.location.hash.startsWith('#/admin'));

  useEffect(() => {
    const onHash = () => setIsAdmin(window.location.hash.startsWith('#/admin'));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (isAdmin) return <AdminLeads />;

  return (
    <>
      <Hero />
      <main>
        <Calculator />
        <Brands />
        <About />
        <WhyChoose />
        <Solutions />
        <Packages />
        <NetMetering />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

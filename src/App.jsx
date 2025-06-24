import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToSection from './ScrollToSection';

export default function App() {
  return (
    <div className="bg-[#0f172a] text-white scroll-smooth">
      <Navbar />
      <ScrollToSection />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<MainPage />} />
        <Route path="/technologies" element={<MainPage />} />
        <Route path="/portfolio" element={<MainPage />} />
        <Route path="/contact" element={<MainPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

function MainPage() {
  return (
    <main className="pt-24 space-y-10">
      <div id="home"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="technologies"><Technologies /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="contact"><Contact /></div>
    </main>
  );
}

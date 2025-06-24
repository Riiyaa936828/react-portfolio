import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const sectionMap = {
  '/': 'home',
  '/services': 'services',
  '/technologies': 'technologies',
  '/portfolio': 'portfolio',
  '/contact': 'contact',
};

export default function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = sectionMap[location.pathname] || 'home';
    const section = document.getElementById(sectionId);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return null;
}

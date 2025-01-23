import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ContactPage from './pages/ContactPage';
import Services from './components/Services';
import Projects from './components/Projects';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
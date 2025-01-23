import React from "react"; 
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage"; 

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
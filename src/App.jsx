//import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Projects from './components/projects/Projects.jsx';
import ViewProject from './components/viewProject/ViewProject.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
//import Resume from './components/resume/Resume';
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/:id" element={<ViewProject />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/Resume" element={<Resume />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App

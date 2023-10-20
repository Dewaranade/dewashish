import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Company from './components/Company';
import Contact from './components/Contact';
import './App.css';
import Project from './components/Project';
import ContactForm from './components/ContactForm';

function App() {
  return(
    <React.Fragment>
      <Navbar/>
      <Home/>
      <About />
      <Skills />
      <Project />
      <Company />
      <Contact />
      {/* <ContactForm /> */}
    </React.Fragment>
  )
}

export default App;
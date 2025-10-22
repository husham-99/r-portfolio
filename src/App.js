import React from 'react'
import Home from "./components/home/Home";
import Nav from '../src/components/navbar/Nav'
import About from "./components/about/About";
import Service from "./components/services/Service";
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Home />
      <About/>
      <Service/>
      <Project/>
      <Contact/>
      
    </div>
  );
}

export default App;

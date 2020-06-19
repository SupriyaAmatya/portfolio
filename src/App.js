import React, { Component } from 'react';
import './styles/styles.css'
import './styles/reset.css'
import Navbar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/layouts/Footer';
import Portfolio from './components/portfolio/Portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;

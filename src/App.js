import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
      </main>
    </div>
  );
}

export default App;

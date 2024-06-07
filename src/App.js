import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Footer from './components/Footer';
import Github from './pages/Github';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/github' element={<Github />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

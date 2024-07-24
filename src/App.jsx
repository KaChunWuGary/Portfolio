import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css'

import Header from './components/Header1.jsx'
import About from "./pages/About.jsx"
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <div className='main-content'>
                <Home />
                <Routes>
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/" element={<About />} />
                </Routes>
            </div>
            <Footer classname ="footer"/>
        </BrowserRouter>
  );
};

export default App;

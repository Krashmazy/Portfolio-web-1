import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Home darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Blog darkMode={darkMode} />
            <Contact darkMode={darkMode} />
        </div>
    );
}

export default App;

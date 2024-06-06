import React from 'react';
import './Header.css';

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className="header">
            <div className="logo-container">
                <a href="#home">
                    <img src={`${process.env.PUBLIC_URL}/images/logo portfolio.png`} alt="Logo" className="logo" />
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills-experience">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="dark-mode-toggle-container">
                <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
                    <img
                        src={darkMode ? `${process.env.PUBLIC_URL}/images/icons8-soleil-50.png` : `${process.env.PUBLIC_URL}/images/icons8-lune-50.png`}
                        alt={darkMode ? 'Light Mode' : 'Dark Mode'}
                        className="dark-mode-icon"
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
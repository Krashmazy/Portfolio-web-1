import React from 'react';
import './Home.css';

const Home = ({ darkMode }) => {
    return (
        <section id="home" className={`home ${darkMode ? 'dark-mode' : ''}`}>
            <div className="container">
                <div className="hero">
                    <div className="intro-box">
                        <p>Hello, I'm Alexis</p>
                        <p>I'm a DevOps Engineer</p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/images/moi PP 1.jpg`} alt="Alexis" className="profile-pic" />
                    <div className="social-links">
                        <a href="https://github.com/Krashmazy" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/GitHub-Logo.wine.png`} alt="GitHub" className="social-icon" />
                        </a>
                        <a href="https://gitlab.com/bernealexis" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/GitLab-Logo.wine.png`} alt="GitLab" className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/alexis-berne-626558128/" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/LinkedIn-Logo.wine.png`} alt="LinkedIn" className="social-icon" />
                        </a>
                    </div>
                    <div className="tech-bubbles">
                        <img src={`${process.env.PUBLIC_URL}/images/Amazon_Web_Services-Logo.wine.png`} alt="AWS" className="tech-bubble" />
                        <img src={`${process.env.PUBLIC_URL}/images/Docker_(software)-Logo.wine.png`} alt="Docker" className="tech-bubble" />
                        <img src={`${process.env.PUBLIC_URL}/images/Kubernetes-Logo.wine.png`} alt="Kubernetes" className="tech-bubble" />
                        <img src={`${process.env.PUBLIC_URL}/images/MongoDB_Inc.-Logo.wine.png`} alt="MongoDB" className="tech-bubble" />
                        <img src={`${process.env.PUBLIC_URL}/images/Python_(programming_language)-Logo.wine.png`} alt="Python" className="tech-bubble" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;

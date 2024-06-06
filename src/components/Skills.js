import React from 'react';
import './Skills.css';

const Skills = ({ darkMode }) => {
    return (
        <section id="skills-experience" className={`skills-experience ${darkMode ? 'dark-mode' : ''}`}>
            <div className="container">
                <div className="skills">
                    <h2>Compétences</h2>
                    <div className="skills-logos">
                        <img src={`${process.env.PUBLIC_URL}/images/Linux-Logo.wine.png`} alt="Linux"/>
                        <img src={`${process.env.PUBLIC_URL}/images/Bash_(Unix_shell)-Logo.wine.png`} alt="bash"/>
                        <img src={`${process.env.PUBLIC_URL}/images/React_(web_framework)-Logo.wine.png`} alt="React"/>
                        <img src={`${process.env.PUBLIC_URL}/images/Amazon_Web_Services-Logo.wine.png`} alt="AWS"/>
                        <img src={`${process.env.PUBLIC_URL}/images/Docker_(software)-Logo.wine.png`} alt="Docker"/>
                        <img src={`${process.env.PUBLIC_URL}/images/GitHub-Logo.wine.png`} alt="GitHub"/>
                        <img src={`${process.env.PUBLIC_URL}/images/GitLab-Logo.wine.png`} alt="GitLab"/>
                        <img src={`${process.env.PUBLIC_URL}/images/Kubernetes-Logo.wine.png`} alt="Kubernetes"/>
                        <img src={`${process.env.PUBLIC_URL}/images/MongoDB_Inc.-Logo.wine.png`} alt="MongoDB"/>
                        <img src={`${process.env.PUBLIC_URL}/images/Python_(programming_language)-Logo.wine.png`} alt="Python"/>
                    </div>
                </div>
                <div className="experience">
                    <h2>Expériences Professionnelles</h2>
                    <div className="job">
                        <h3>Freelance, Consultant Expert Digital & Data</h3>
                        <p>Octobre 2021 - Aujourd'hui</p>
                    </div>
                    <div className="job">
                        <h3>CNH Industrial, Product Manager</h3>
                        <p>Octobre 2019 - Septembre 2021</p>
                    </div>
                    <div className="job">
                        <h3>Indépendant, E-Commerce</h3>
                        <p>Janvier 2018 - Décembre 2018</p>
                    </div>
                    <div className="job">
                        <h3>Crédit du Nord, Conseiller d'Entreprises</h3>
                        <p>Septembre 2016 - Octobre 2017</p>
                    </div>
                    <div className="job">
                        <h3>Community Manager, Galerie Sommerlath</h3>
                        <p>Mars 2015 - Décembre 2015</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

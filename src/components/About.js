import React from 'react';
import './About.css';

const About = ({ darkMode }) => {
    return (
        <section id="about" className={darkMode ? 'dark-mode' : ''}>
            <div className={`about-container ${darkMode ? 'dark-mode' : ''}`}>
                <h2>À propos de moi</h2>
                <p>Je m'appelle Alexis Berne et je suis Ingénieur DevOps en reconversion professionnelle. Fort de
                    plusieurs expériences professionnelles variées, notamment en tant que Freelance Consultant en
                    stratégie digitale, j'ai développé un profil polyvalent et autodidacte.</p>
                <p>Mon parcours m'a conduit à travailler dans des domaines divers, allant du marketing digital à la
                    gestion de projets en passant par l'analyse de données. Passionné par les nouvelles technologies et
                    toujours en quête de nouvelles connaissances, j'ai récemment entrepris une formation en DevOps,
                    complétée par des certifications reconnues telles que AWS Solutions Architect - Associate.</p>
                <p>Mon objectif est d'appliquer mes compétences analytiques et mon esprit créatif à des projets
                    innovants, tout en continuant à évoluer dans le domaine de la technologie et de la transformation
                    digitale.</p>
                <p>Je suis motivé par les défis et je cherche constamment à améliorer mes compétences pour offrir des
                    solutions efficaces et adaptées aux besoins de mes clients. Si vous êtes à la recherche d'un
                    professionnel curieux, adaptable et engagé, n'hésitez pas à me contacter.</p>
            </div>
        </section>
    );
};

export default About;

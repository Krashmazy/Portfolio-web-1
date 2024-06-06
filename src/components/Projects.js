import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Projets</h2>
                <div className="project-list">
                    <div className="project-item">
                        <h3>Projet R</h3>
                        <p className="project-description">Ce projet vise à transformer et à faire évoluer une architecture web classique en une solution moderne et scalable grâce à Kubernetes. Nous repartons des bases d'un travail Linux comprenant deux serveurs web (NGINX dans ce cas) équipés d'un CMS (Wordpress) et d'un Load Balancer pour développer une application web déployable sur un cloud provider tel qu'AWS.</p>
                        <p className="project-objective">Objectif du projet : Containerisation, Tests, Orchestration, Automatisation, Infrastructure As Code (IaC), Production .</p>
                        <p className="project-installation">Technologies : Docker, Kubernetes, Helm, GitLab CI, AWS CLI, Terraform, Prometheus.</p>
                    </div>
                    <div className="project-item">
                        <h3>Projet site pièces motards</h3>
                        <p className="project-description">Ce projet vise à faire une architecture web classique en référençant les pièces mécaniques pour les motos, grâce à l'API d'Oscaro en OpenSource sur GitHub</p>
                        <p className="project-objective">Objectif du projet : Containerisation, Tests, Orchestration, Disponibilité, automatisation, Traçabilité.</p>
                        <p className="project-installation">Technologies : Docker, Kubernetes, React, NodeJs, Orchestration, Automatisation.</p>
                    </div>
                    <div className="project-item">
                        <h3>Projet Application Moto</h3>
                        <p className="project-description">bientôt.</p>
                        <p className="project-objective">bientôt.</p>
                        <p className="project-installation">bientôt.</p>
                    </div>
                    {/* projets suivants */}
                </div>
            </div>
        </section>
    );
};

export default Projects;


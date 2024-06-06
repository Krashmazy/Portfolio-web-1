import React from 'react';
import './Blog.css';

const Blog = ({ darkMode }) => {
    return (
        <section id="blog" className={`blog ${darkMode ? 'dark-mode' : ''}`}>
            <div className="container">
                <h2>Blog</h2>
                <p>Bienvenue sur mon blog. Ici, je partage mes réflexions et mes expériences.</p>
            </div>
        </section>
    );
};

export default Blog;

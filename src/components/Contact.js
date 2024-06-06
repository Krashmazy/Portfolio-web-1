import React from 'react';
import './Contact.css';

const Contact = ({ darkMode }) => {
    return (
        <section id="contact" className={`contact ${darkMode ? 'dark-mode' : ''}`}>
            <div className="container">
                <h2>Let's Talk Together</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="icon">
                            <img src={`${process.env.PUBLIC_URL}/images/gmail.png`} alt="Email Icon" />
                        </div>
                        <p>bernexlexis@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <div className="icon">
                            <img src={`${process.env.PUBLIC_URL}/images/telephone.png`} alt="Phone Icon" />
                        </div>
                        <p>+0627222567</p>
                    </div>
                </div>
                <form className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

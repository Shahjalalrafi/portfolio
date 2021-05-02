import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className={`${styles.container} ${styles.contact}`}>
            <small style={{color: 'cyan'}}>What's next?</small>
            <h2>Get In Touch</h2>
            <p>I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you!</p>
            <Link to="/contact"><button className={styles.btnOutline}>Say Hello</button></Link>
        </div>
    );
};

export default Contact;
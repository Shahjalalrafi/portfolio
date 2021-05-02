import React from 'react';
import styles from './ContactDetails.module.css'

const ContactDetails = () => {
    return (
        <div className={`${styles.container} ${styles.contact}`}>
            <form className={styles.form}>
                <input className={styles.name} type="text" placeholder="Your Name" />
                <input className={styles.email} type="email" placeholder="Your Email" />
                <input className={styles.textArea} type="textarea" placeholder="Your Message" />
                <input type="submit" className={styles.btn} value="submit" />
            </form>
        </div>
    );
};

export default ContactDetails;
import React from 'react';
import styles from './ContactDetails.module.css'
import emailjs from 'emailjs-com';

const ContactDetails = () => {

    const sendMail = (e) => {
        e.preventDefault()
        emailjs.sendForm('gmail', 'template_tki0b9e', e.target, 'user_Idf5a9KWXITrEOeqp0y6D')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })

        e.target.reset()
    }
    return (
        <div className={`${styles.container} ${styles.contact}`}>
            <form onSubmit={sendMail} className={styles.form}>
                <input className={styles.name} type="text" name="name" placeholder="Your Name" />
                <input className={styles.email} type="email" name="email" placeholder="Your Email" />
                <input className={styles.textArea} type="textarea" name="message" placeholder="Your Message" />
                <input type="submit" className={styles.btn} value="submit" />
            </form>
        </div>
    );
};

export default ContactDetails;
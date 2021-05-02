import React from 'react';
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className={`${styles.container} ${styles.footer}`}>
            <div>Design and Build by <a style={{color: 'cyan'}} href="https://github.com/shahjalalrafi" rel="noreferrer" target='_blank'>Shahjalal rafi</a></div>
            <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />Star</p>
        </footer>
    );
};

export default Footer;
import React, { useEffect } from 'react';
import styles from './Details.module.css'
import myImg from '../../../Images/pic1.png'
import Aos from 'aos'
import { Link } from 'react-router-dom';

const Details = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[])
    return (
        <section className={`${styles.container} ${styles.Details}`} >
            <div  data-aos="fade-right" className={styles.myDetails}>
                <small>Hello, I'm</small>
                <h2>SHAHJALAL RAFI</h2>
                <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                <Link to="/about"><button className={styles.btn}>About Me</button></Link>
                <button className={styles.btnOutline}><a rel="noreferrer" href="https://www.linkedin.com/in/shahjalal-rafi-bb710a1b4/" target="_blank">Get In Touch</a></button>
            </div>
            <div data-aos="fade-left" className={styles.myImage}>
                <img src={myImg} alt=""/>
            </div>
        </section>
    );
};

export default Details;
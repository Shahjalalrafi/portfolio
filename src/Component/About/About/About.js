import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
// import Skills from '../../Home/Skills/Skills';
import styles from './About.module.css'
import img from '../../../Images/pic1.png'

const About = () => {
    const skills = ['javascript', 'React.js', 'Node.js', 'Express.js', 'MongoDB.js', 'firebase', 'HTML', 'css', 'Bootstrap', 'material ul', 'Redux.js', 'sass']
    const comfortable = ['javascript', 'React.js', 'Node.js', 'Express.js', 'MongoDB.js', 'Firebase', 'HTML', 'CSS', 'Bootstrap']
    const familiar = ['redux', 'react-native', 'next.js']
    return (
        <div>
            <Navbar />
            <div className={`${styles.container} ${styles.skills}`}>
                <div data-aos="fade-right" className={`${styles.details}`}>
                    <img style={{width: "70%"}} src={img} alt=""/>
                </div>
                <div data-aos="fade-left" className={styles.content}>
                    <h4>My Skill Set</h4>
                    <div>
                        {
                            skills.map(skill => <span>{skill}</span>)
                        }
                    </div>
                    <h4 className={styles.comfort}>Feel free work with</h4>
                    {
                        comfortable.map(comfort => <span>{comfort}</span>)
                    }

                    <h4 className={styles.comfort}>Familiar with</h4>
                    {
                        familiar.map(fami => <span>{fami}</span>)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
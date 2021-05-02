import React, { useEffect } from 'react';
import styles from './Skills.module.css'
import Aos from 'aos'

const Skills = () => {
    const skills = ['javascript', 'React.js', 'Node.js', 'Express.js', 'MongoDB.js', 'firebase', 'HTML', 'css', 'Bootstrap','material ul', 'Redux.js', 'sass']
    const comfortable = ['javascript', 'React.js', 'Node.js', 'Express.js', 'MongoDB.js', 'Firebase', 'HTML', 'CSS', 'Bootstrap']
    const familiar = ['redux', 'react-native', 'next.js']
    useEffect(() => {
        Aos.init({duration:2000});
    },[])
    return (
        <div className={`${styles.container} ${styles.skills}`}>
            <div data-aos="fade-right" className={styles.details}>
                <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                <button className={styles.btn}>Contact Me</button>
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
    );
};

export default Skills;
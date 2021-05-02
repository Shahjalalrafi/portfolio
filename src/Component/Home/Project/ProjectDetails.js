import React, { useEffect } from 'react';
import styles from './Project.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCode, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'

const ProjectDetails = ({ project }) => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[])
    return (
        <div data-aos="zoom-in" className={styles.project}>
            <div className="projectImg">
                <img style={{ width: '100%', height: '150px', borderRadius: '5px' }} src={project.img} alt="img" />
            </div>
            <div className={styles.projectDetails}>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                {
                    project.skills.map(skill => <span>{skill}</span>)
                }
                <div className={styles.button}>
                    <a href={project.github} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faCode} /></a>
                    <a href={project.live} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faSignInAlt} /></a>
                </div>
            </div>
        </div>
    );
};
export default ProjectDetails;
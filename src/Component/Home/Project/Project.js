import React, { useEffect } from 'react';
import styles from './Project.module.css'
import hairShine from '../../../Images/hairshine.PNG'
import homeMarket from '../../../Images/home-market.PNG'
import sports from '../../../Images/stoprs-team.PNG'
import ProjectDetails from './ProjectDetails';

const Project = () => {

    const projectDetails = [
        {
            name: 'hairShine',
            img: hairShine,
            desc: 'A single page hair salon site.where you can find admin section for admin who can see everything in this website on the other hand a normal user has some restrictions',
            skills: ['React.js', 'node.js', 'firebase', 'express', 'react-router', 'context-api'],
            live: 'https://hairshine-867d2.web.app/',
            github: 'https://github.com/Shahjalalrafi/hairShine'
        },
        {
            name: 'home market',
            img: homeMarket,
            desc: 'A single page electronics shop.where anyone can purchase anything but before purchase buyer need to login.after purchase anything this purchase product will redirect to order page.then anyone can delete and add product in home page',
            skills: ['React.js', 'node.js', 'firebase', 'express', 'react-router', 'context-api'],
            live: 'https://fullstack-shop-84fee.firebaseapp.com/',
            github: 'https://github.com/Shahjalalrafi/fullstack-home-market'
        },
        {
            name: 'sports team',
            img: sports,
            desc: 'A single page sport team webiste.where anyone can click on explore button and clicking this button this route will change this specific details of this team..',
            skills: ['React.js',  'react-router', 'context-api','React.js',  'react-router'],
            url: 'https://fullstack-shop-84fee.firebaseapp.com/',
            github: 'https://github.com/Shahjalalrafi/Sports-team'
        },
    ]

    return (
        <div className={`${styles.container} ${styles.projects}`}>
            <h2>See some of my works</h2>
            <div className={styles.myProject}>
            {
                projectDetails.map(project => <ProjectDetails project= {project} />)
            }
            </div>
        </div>
    );
};

export default Project;
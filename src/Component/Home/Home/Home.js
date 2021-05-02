import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../contact/Contact';
import Details from '../Details/Details';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';
const Home = () => {
    return (
        <main>
            <Navbar />
            <Details />
            <Project />
            <Skills />
            <Blogs />
            <Contact />
            <Footer />
        </main>
    );
};

export default Home;
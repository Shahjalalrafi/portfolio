import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../contact/Contact';
import Details from '../Details/Details';
import Footer from '../Footer/Footer';
import Interest from '../Interest/Interest';
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
            <Interest />
            <Contact />
            <Footer />
        </main>
    );
};

export default Home;
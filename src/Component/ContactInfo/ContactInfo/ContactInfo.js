import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import ContactDetails from '../ContactDetails/ContactDetails';

const ContactInfo = () => {
    return (
        <div>
            <Navbar />
            <ContactDetails />
            <Footer />
        </div>
    );
};

export default ContactInfo;
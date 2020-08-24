import React from 'react';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../common/Breadcrumb';

const Contact = () => (
    <>
        <Helmet><title>Contact Us - Federal Government Academy Centre for the Gifted and Talented Suleja, Niger State</title></Helmet>
        <Breadcrumb 
            link="contact" 
            linkText="Contact"
            title="Contact Us"
        />
        <section className="contact">
            <h5>Do you have any questions or suggestions? We would love to hear from you. Contact us now!</h5>
            <div>
                <a href="#!" className="contact-link">
                    <span className="mdi mdi-map-marker"></span>
                    <p>P.O. Box 80, Suleja - Niger State, Nigeria.</p>
                </a>
                <a href="mailto:fedacademysuleja@yahoo.com" className="contact-link">
                    <span className="mdi mdi-email"></span>
                    <p>fedacademysuleja@yahoo.com</p>
                </a>
                <a href="tel:+234 803 580 2249" className="contact-link">
                    <span className="mdi mdi-phone"></span>
                    <p>+234 803 580 2249</p>
                </a>
            </div>
        </section>
    </>
);

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
    <section className="about-school">
        <div className="about-container">
            <h4>About Fedacad</h4>
            <div>
                <p>The Federal Government Academy, Suleja, Centre for the Gifted and Talented Students in Nigeria, formerly known as Suleja Academy, was founded on 25th May, 1990, during the tenure of Professor Jibril Aminu as the Minister of Education. It is a special school for nurturing gifted and talented children of secondary school age.</p> <br/>
                <p className="last-paragraph">This great citadel of learning for the gifted and talented, started off with a Principal, a Vice Principal, fifteen (15) academic staff and 205 students (151 boys and 54 girls). It was sited on the premises of the defunct Federal School of Art and Science, a site it is still occupying till date. The school has graduated over four thousand students since its inception. These have made their mark in various institutions of higher learning both in Nigeria and abroad and in various professions. </p>
                <Link className="button" to="/about">Read More</Link>
            </div>
        </div>
    </section>
);

export default About;
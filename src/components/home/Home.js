import React from 'react';
import { Helmet } from 'react-helmet';

import Slider from './Slider';
import Welcome from './Welcome';
import Principal from './Principal';
import News from './News';
import Map from './Map';
import About from './About';
import Administrators from './Administrators';
const Home = () => (
    <>
        <Helmet><title>Home - Federal Government Academy Centre for the Gifted and Talented Suleja, Niger State</title></Helmet>
        <Slider />
        <Welcome />
        <Principal />
        <News />
        <Administrators />
        <Map />
        <About />
    </>
);

export default Home;
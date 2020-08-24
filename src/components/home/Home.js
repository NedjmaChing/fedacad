import React from 'react';

import Slider from './Slider';
import Welcome from './Welcome';
import Principal from './Principal';
import News from './News';
import Map from './Map';
import About from './About';
import Administrators from './Administrators';
const Home = () => (
    <>
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
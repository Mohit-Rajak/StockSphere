import React from 'react';
import Hero from './Hero';
import Award from './Awards';
import State from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';


function HomePage() {
    return ( 
        <>
        <Hero />
        <Award />
        <State />
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;
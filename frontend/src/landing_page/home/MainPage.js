import React from 'react';
import Hero from './Hero';
import Award from './Awards';
import State from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';


function MainPage() {
    return ( 
        <>
        <Hero/>
        <OpenAccount/>
        <State />
        <Award />
        <Pricing/>
        <Education/>
        </>
     );
}

export default MainPage;
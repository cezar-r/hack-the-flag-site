import './App.css';
import React from 'react';
import { aboutUs } from './admin-panel';

import Navbar from './Navbar';


export default function AboutUs() {

    const aboutUsElements = aboutUs.map((a) => 
        <div className='aboutUs' key ='{a}'>
            <h1>
                {a.title}
            </h1>
            <h3>
                {a.description}
            </h3>
        </div>)

    return (
        <div>
            <Navbar/>
            {aboutUsElements}
        </div>
    );
}


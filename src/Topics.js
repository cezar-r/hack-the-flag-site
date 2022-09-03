import './App.css';
import React from 'react';
import { topics } from './admin-panel';

import Navbar from './Navbar';

export default function Topics() {

    const topicsElements = topics.map((a) => 
        <div className='lessonTabs'>
            <h2>
                {a.lessonName}
            </h2>
            <h4>
                <a target="_blank" rel="noopener noreferrer" href={a.slideUrl}>Slides</a>
            </h4>
            <p>
                {a.lessonDescription}
            </p>
        </div>)

    return (
        <div>
            <Navbar/>
            {topicsElements}
        </div>
    );
}


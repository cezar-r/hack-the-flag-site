import './App.css';
import React from 'react';
import { announcements } from './admin-panel';

import Navbar from './Navbar';

export default function Annoucements() {

    const announcementElements = announcements.map((a) => 
        <div className='pageBody'>
            <h1>
               {a.announcementTitle} 
            </h1>
            <h3>
                {a.announcementBody}
            </h3>
        </div>)

    return (
        <div>
            <Navbar/>
            {announcementElements}
        </div>
    );
}


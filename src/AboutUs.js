import './App.css';
import React from 'react';
import { aboutUs } from './admin-panel';
import { officerInfo } from './admin-panel';

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
        </div>
      )

  const officerInfoElements = officerInfo.map((b)=>

      <div className='officerTabs'>
         <img src = "https://picsum.photos/220/220" alt="officerX.jpg"></img>
          <h2>
              {b.name}
          </h2>
          <h4>
              {b.bio}
          </h4>
          <p>
              {b.title}
          </p>
     </div>
)

    return (
        <div class="container">
            <Navbar/>
            {aboutUsElements}
            {officerInfoElements}
        </div>
    );
}

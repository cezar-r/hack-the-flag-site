import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';

// import MatrixRain  from './MatrixRain'
import Home from './Home';
import Announcements from './Announcements';
import Topics from './Topics';
import AboutUs from './AboutUs';


/**
 * TODO
 * fix top border of loggin field being darker
 * add discord url to discord nav that just launches discord
 * fix sizing and spacing of nav
 * 
 * add home page 
 * add route to home page
 * build individual pages
 * build all routes 
 */

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/topics" element={<Topics />} />
          {/* <Route path="/calendar" element={<Calendar />} /> */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import Home from './Home';
import Announcements from './Announcements';
import Topics from './Topics';
import AboutUs from './AboutUs';
import Calendar from './Calendar';


/**
 * TODO
 * fix top border of login field being darker
 * add calendar
 * add discord url to discord nav that just launches discord  DONE
 * make matrix rain start at random position
 */

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

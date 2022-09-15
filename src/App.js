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
 * add favicon
 * add custom domain
 * add actual content
 * fix mobile view
 * add "or hack me ;)"
 * contact info
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

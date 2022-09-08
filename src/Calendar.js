import './App.css';
import React from 'react';
import Navbar from './Navbar';

import CalendarComponent from './CalendarComponent';
import { calendar } from './admin-panel';


export default function Calendar() {
    return (
        <div>
            <Navbar/>
            <CalendarComponent calendarData = {calendar}/>
            <div className="whiteSpace50px">
                This is a hidden message that can be used for CTF's 
            </div>
        </div>
    );
}


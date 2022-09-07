import './App.css';
import React from 'react';
import Navbar from './Navbar';


class CalendarObj {

    month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


    constructor() {
        this.d = new Date();
    }

    getMonth() {
        const d = new Date();
        return month[this.d.getMonth()];
    }

    getCalendarElements() {
        const calendarElements = [[]];
        const firstDay = new Date(this.d.getFullYear(), this.d.getMonth(), 1).getDay();

        for (i = 0; i++; i<firstDay) {
            calendarElements[0][i] = null;
        }
    }

}


export default function Calendar() {

    const calendar = new CalendarObj();

    return (
        <div>
            <Navbar/>
            {aboutUsElements}
        </div>
    );
}


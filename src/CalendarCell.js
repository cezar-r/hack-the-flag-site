import './App.css';
import React from 'react';



export default function CalendarCell(props) {

    // date day eventname location time

    let cssClass = "calendarCell";
    if (props.date === ".") {
        cssClass = "emptyCalendarCell";
    } else if (props.eventName === ".") {
        cssClass = "defaultCalendarCell";
    }
    console.log(props.date)
    return (
        <div className={cssClass}>
            <div align= "left">
                {props.date}
            </div>
            <div align="right">
                {props.day}
            </div>
            <div>
            </div>
        </div>
    );
}


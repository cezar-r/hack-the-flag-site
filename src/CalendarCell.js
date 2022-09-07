import './App.css';
import React from 'react';



export default function CalendarCell(props) {

    // date day eventname location time

    if (props.date === "") {
       return (
        <div className='emptyCalendarCell'>
        </div>
       )
    } else if (props.eventName === "") {
        return (
            <div className="defaultCalendarCell">
                 <div className = "calendarDate">
                <div align="left">
                    {props.day}
                </div>
                <div align="left">
                    {props.date}
                </div>
            </div>
            </div>
        );
    }
    return (
        <div className="calendarCell">
            <div className = "calendarDate">
                <div align="left">
                    {props.day}
                </div>

                <div align="left">
                    {props.date}
                </div>
            </div>
            <div>
                {props.eventName}
            </div>
            <div>
                {props.location}
            </div>
            <div>
                {props.time}
            </div>
        </div>
    );
}


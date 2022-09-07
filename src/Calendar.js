import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar';

import CalendarCell from './CalendarCell';
import { calendar } from './admin-panel';

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayAbbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


function getCalendarData(month, year) {
    const calendarElements = [];
    const firstDay = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month+1, 0).getDate();

    // getting the first week of the calendar
    const firstWeek = [];
    for (let i = 0; i<firstDay; i++) {
        firstWeek[i] = <CalendarCell date="" day="" eventName="" time="" location=""/>;
    }

    for (let i=firstDay;i<7;i++) {
        let date = (i-firstDay+1).toString();
        let dayOfTheWeek = dayAbbr[new Date(year, month, i-firstDay+1).getDay()]; 
        let event;
        try{
            event = calendar[months[month]][date];
        } catch(err) {
            event = null;
        }
        if (event) {
            event["date"] = date;
            event["day"] = dayOfTheWeek
            firstWeek[i] = <CalendarCell 
                            date={event.date} 
                            day={event.day} 
                            eventName={event.eventName} 
                            time={event.time} 
                            location={event.location}
                            />;
        } else {
            firstWeek[i] =  <CalendarCell 
                            date={date} 
                            day={dayOfTheWeek} 
                            eventName={""} 
                            time={""} 
                            location={""}
                            />;
        }
    }

    calendarElements[0] = firstWeek;

    // getting the rest of the calendar
    const continuationDate = 7-firstDay+1;
    let weeklyElements = [];
    for (let i=continuationDate;i<=numDays;i++) {
     
            let date = i.toString();
            let dayOfTheWeek = dayAbbr[new Date(year, month, i).getDay()]; 
            let event;
            try {
                event = calendar[months[month]][date];
            } catch(err) {
                event = null;
            }
            if (event) {
                event["date"] = date;
                event["day"] = dayOfTheWeek;
                weeklyElements.push(<CalendarCell 
                                    date={event.date} 
                                    day={event.day} 
                                    eventName={event.eventName} 
                                    time={event.time} 
                                    location={event.location}
                                    />);
            } else {
                weeklyElements.push(<CalendarCell 
                                date={date} 
                                day={dayOfTheWeek} 
                                eventName={""} 
                                time={""} 
                                location={""}
                                />);
            }

            if ((i-continuationDate+1) % 7 === 0) {
                calendarElements.push(weeklyElements);
                weeklyElements = [];
            }
        
    } 

    // check if there are more dates to add for next month
    // or check if last week got filled out all the way
    const elements = weeklyElements.length;
    if (1 < weeklyElements.length < 7) {
        for (let i = 0; i < 7-elements;i++) {
            weeklyElements.push(<CalendarCell date="" day="" eventName="" time="" location=""/>);
        }
    }
    calendarElements.push(weeklyElements);

    console.log(calendarElements);

    return calendarElements.map((week) => 
        <div className="calendar">
            {week.map((day =>
                <div className="calendarRow">
                    {day}
                </div>
                
                ))}

        </div>
    );
}



export default function Calendar() {


    const upOneMonth = () => {
        if (curMonth === 11) {
            setMonth(0);
            setYear(curYear+1);
        } else {
            setMonth(curMonth+1);
            setYear(curYear);
        }
        setCalendarElements(getCalendarData(curMonth, curYear), );
        console.log(curMonth)
    }

    const downOneMonth = () => {
        if (curMonth === 0) {
            setMonth(11);
            setYear(curYear-1);
        } else {
            setMonth(curMonth-1);
            setYear(curYear);
        }
        setCalendarElements(getCalendarData(curMonth, curYear));
        console.log(curMonth)
    }

    const now = new Date();
    const [curMonth, setMonth] = useState(now.getMonth());
    const [curYear, setYear] = useState(now.getFullYear());
    const [curCalendarElements, setCalendarElements] = useState(getCalendarData(curMonth, curYear));
    
    return (
        <div>
            <Navbar/>
            <div align="center">
                <div className="calendarMonthPicker">
                     <button className="arrowButton" onClick={downOneMonth}>&#8249;</button>
                    <h2>
                        {months[curMonth]}
                    </h2>
                    <button className="arrowButton" onClick={upOneMonth}>&#8250;</button>
                </div>
            </div>
            {curCalendarElements}

        </div>
    );
}


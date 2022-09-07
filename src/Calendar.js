import './App.css';
import React from 'react';
import Navbar from './Navbar';

import CalendarCell from './CalendarCell';
import { calendar } from './admin-panel';

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayAbbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class CalendarObj {

    constructor() {
        this.d = new Date();
        // // to test different months 
        // const testDate = new Date()
        // this.d = new Date(testDate.getFullYear(), 4, 1);
    }

    getMonth() {
        return month[this.d.getMonth()];
    }

    getCalendarData() {
        const calendarElements = [];
        const firstDay = new Date(this.d.getFullYear(), this.d.getMonth(), 1).getDay();
        const numDays = new Date(this.d.getFullYear(), this.d.getMonth() + 1, 0).getDate();

        // getting the first week of the calendar
        const firstWeek = [];
        for (let i = 0; i<firstDay; i++) {
            firstWeek[i] = <CalendarCell date="." day="." eventName="." time="." location="."/>;
        }

        for (let i=firstDay;i<7;i++) {
            let date = (i-firstDay+1).toString();
            let dayOfTheWeek = dayAbbr[new Date(this.d.getFullYear(), this.d.getMonth(), i-firstDay+1).getDay()]; 
            let event;
            try{
                event = calendar[this.getMonth()][date];
            } catch(err) {
                event = null;
            }
            if (event) {
                event["date"] = date;
                event["day"] = dayOfTheWeek
                firstWeek[i] = <CalendarCell 
                                date={event.date} 
                                day={event.day} 
                                eventName={event.Name} 
                                time={event.time} 
                                location={event.location}
                                />;
            } else {
                firstWeek[i] =  <CalendarCell 
                                date={date} 
                                day={dayOfTheWeek} 
                                eventName={"."} 
                                time={"."} 
                                location={"."}
                                />;
            }
        }

        calendarElements[0] = firstWeek;

        // getting the rest of the calendar
        const continuationDate = 7-firstDay+1;
        let weeklyElements = [];
        for (let i=continuationDate;i<=numDays;i++) {
         
                let date = i.toString();
                let dayOfTheWeek = dayAbbr[new Date(this.d.getFullYear(), this.d.getMonth(), i-firstDay+1).getDay()]; 
                let event;
                try {
                    event = calendar[this.getMonth()][date];
                } catch(err) {
                    event = null;
                }
                if (event) {
                    event["date"] = date;
                    event["day"] = dayOfTheWeek;
                    weeklyElements.push(<CalendarCell 
                                        date={event.date} 
                                        day={event.day} 
                                        eventName={event.Name} 
                                        time={event.time} 
                                        location={event.location}
                                        />);
                } else {
                    weeklyElements.push(<CalendarCell 
                                    date={date} 
                                    day={dayOfTheWeek} 
                                    eventName={"."} 
                                    time={"."} 
                                    location={"."}
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
        if (weeklyElements.length !== 7) {
            for (let i = 0; i < 7-elements;i++) {
                weeklyElements.push(<CalendarCell date="." day="." eventName="." time="." location="."/>);
            }
        }
        calendarElements.push(weeklyElements);

        console.log(calendarElements);

        return calendarElements;
    }

}


export default function Calendar() {

    const calendar = new CalendarObj();
    const calendarData = calendar.getCalendarData();

    const calendarElements = calendarData.map((week) => 
        <div className="calendar">
            {week.map((day =>
                <div className="calendarRow">
                    {day}
                </div>
                
                ))}

        </div>
    )

    return (
        <div>
            <Navbar/>
            <h2 align="center">
                {calendar.getMonth()}
            </h2>
            {calendarElements}

        </div>
    );
}


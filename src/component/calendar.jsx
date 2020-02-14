import React, { useState } from 'react';
import {dateToString} from '../js/common';
import CalendarGenerator from '../component/CalendarGenerator';

const Calendar = props => {
    const arrPrpDate =  /^(\d{4})[.|-|/]*(\d{2})[.|-|/]*(\d{2})$/.exec( dateToString(props.date) );    
    const href = '#';    
    const [ calObj, setCalObj ] = useState({
        thisDate    : arrPrpDate[0]
        ,year       : arrPrpDate[1]
        ,month      : arrPrpDate[2]
        ,day        : arrPrpDate[3]
        ,defaultDaySelect : props.daySelect || false
    });

    const nextMonth = () => {                        
        const date  =   new Date( calObj.year , calObj.month , 1 );        
        const yyyy  =   date.getFullYear();
        const mon   =   date.getMonth()+1 >= 10 ? date.getMonth()+1 : `0${date.getMonth()+1}`;
        const day   =   date.getDate() >= 10 ? date.getDate() : "0"+date.getDate();
       setCalObj({
            ...calObj
            ,thisDate   : `${yyyy}${mon}${day}`
            ,year       : yyyy
            ,month      : mon
            ,day        : day
       })
    }

    const prevMonth = () => {
        const strYear  = (calObj.month-1) * 1 === 0 ? calObj.year-1 : calObj.year;
        let strMonth = (calObj.month-1) * 1 === 0 ? 12 : (calObj.month-1)
        strMonth < 10 &&  ( strMonth = `0${strMonth}` );
        setCalObj({
            ...calObj
            ,thisDate   : `${strYear}${strMonth}01`
            ,year       : strYear
            ,month      : strMonth
            ,day        : "01"
        })
    }
    
    
    return(
        <>
            {props.children}<br/>
            <a href={href} onClick={ ()=> prevMonth() }>&lt;</a>&nbsp;&nbsp; {calObj.year} / {calObj.month} &nbsp;&nbsp;<a href={href} onClick={ ()=> nextMonth() }>&gt;</a>
            <CalendarGenerator year={calObj.year} month={calObj.month} day={calObj.day} date={calObj.thisDate}></CalendarGenerator>
        </>
    )
}

export default Calendar;
import React, { useState } from 'react';
import {dateToString} from '../js/common';

const Calendar = props => {
    const prpDate = props.date || dateToString();
    const arrPrpDate =  /(\d{4})[.|-]*(\d{2})[.|-]*(\d{2})*/.exec(prpDate);    
    const href = '#'
    const [ calObj, setCalObj ] = useState({
        thisDate    : arrPrpDate[0]
        ,year       : arrPrpDate[1]
        ,month      : arrPrpDate[2]
        ,day        : arrPrpDate[3]
        ,defaultDaySelect : props.daySelect || false
    });

    const nextMonth = () => {        
        const strThisDate = dateToString( new Date( calObj.year,calObj.month,'01' ) );
        const arrThisDate = /(\d{4})(\d{2})(\d{2})/.exec( strThisDate );
        setCalObj({
            ...calObj
            ,thisDate   : arrThisDate[0]
            ,year       : arrThisDate[1]
            ,month      : arrThisDate[2]
            ,day        : arrThisDate[3]
        })
    }

    const prevMonth = () => {
        const strYear  = (calObj.month-1) * 1 === 0 ? calObj.year-1 : calObj.year;
        let strMonth = (calObj.month-1) * 1 === 0 ? 12 : (calObj.month-1)
        strMonth < 10 &&  ( strMonth = "0"+strMonth );
        setCalObj({
            ...calObj
            ,thisDate   : strYear+""+strMonth+"01"
            ,year       : strYear
            ,month      : strMonth
            ,day        : "01"
        })
    }
    
    
    return(
        <>
            {props.children}<br/>
            <a href={href} onClick={ ()=> prevMonth() }>&lt;</a>&nbsp;&nbsp; {calObj.year} / {calObj.month} &nbsp;&nbsp;<a href={href} onClick={ ()=> nextMonth() }>&gt;</a>            
        </>
    )
}

export default Calendar;
import React, { useState } from 'react';
import {getLastDate,dateToString} from '../js/common';

const Calendar = props => {
    const prpDate = props.date || dateToString();
    const arrPrpDate =  /(\d{4})[.|-]*(\d{2})[.|-]*(\d{2})*/.exec(prpDate);
    const [ calObj, setCalObj ] = useState({
        thisDate   : prpDate
        ,year       : arrPrpDate[1]
        ,month      : arrPrpDate[2]
        ,day        : arrPrpDate[3]
        ,defaultDaySelect : props.daySelect || false
    });

    console.log( calObj );
    console.log( getLastDate( calObj.thisDate ) );

    const nextMonth = () => {
        const arr = /(\d{4})(\d{2})(\d{2})/.exec( calObj.thisDate );
        
    }
    
    return(
        <>
            {props.children}<br/>
            <a href="">&lt;</a>&nbsp;&nbsp; {calObj.year} / {calObj.month} &nbsp;&nbsp;<a href="" onClick={ ()=> nextMonth() }>&gt;</a>            
        </>
    )
}

export default Calendar;
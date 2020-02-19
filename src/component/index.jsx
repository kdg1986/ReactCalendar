import React from 'react';
import {dateToString} from '../js/common';
import CalendarWarpper from './CalendarWarpper';

const Calendar = props => {
    const arrPrpDate =  /^(\d{4})[.|-|/]*(\d{2})[.|-|/]*(\d{2})$/.exec( dateToString(props.date) );    
    const init = {
        ...props
        ,date        : arrPrpDate[0]
        ,year       : arrPrpDate[1]
        ,month      : arrPrpDate[2]
        ,day        : arrPrpDate[3]
        ,defaultDaySelect : props.daySelect || false
        ,type : props.type || 'input'
        ,drag : props.drag || false
    }
    return( 
       <CalendarWarpper initObj={init}></CalendarWarpper>
    )
}

export default Calendar;
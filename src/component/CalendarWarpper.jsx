import React,{ useState } from 'react';
import WideCalendar from './WideCalendar';
import InputCalendar from './InputCalendar';
import {selectMonDateList,lpad} from '../js/common';

const CalendarWarpper = props => {
    
    const { type,date } = props.initObj;
    props.initObj.dateList = selectMonDateList(date);
    const [ state , setState ] = useState({ ...props.initObj });
    const functions = {
        nextMonth : () => {                        
            const date  =   new Date( state.year , state.month , 1 );
            const yyyy  =   date.getFullYear();
            const mon   =   lpad( date.getMonth()+1 );
            const day   =   lpad( date.getDate() );
            setState({
                ...state
                ,date       : `${yyyy}${mon}${day}`
                ,year       : yyyy
                ,month      : mon
                ,day        : day
                ,dateList   : selectMonDateList(`${yyyy}${mon}${day}`)
           })
        }
        ,prevMonth : () => {
            const strYear  = lpad( (state.month-1) * 1 === 0 ? state.year-1 : state.year );
            const strMonth = lpad( (state.month-1) * 1 === 0 ? 12 : (state.month-1) );        
            setState({
                ...state
                ,date       : `${strYear}${strMonth}01`
                ,year       : strYear
                ,month      : strMonth
                ,day        : "01"
                ,dateList   : selectMonDateList(`${strYear}${strMonth}01`)
            })
        }
        ,selectDate : (date) => {
            setState({
                ...state                
                ,dateList   : state.dateList.map( item =>   
                    item.map(item => { return {...item, selected : item.fullDate === date.fullDate }  } ) 
                )
            })
        }
        ,dargDate : (date) => {
            setState({
                ...state                
                ,dateList   : state.dateList.map( item =>
                    item.map(item => { 
                        item.fullDate === date.fullDate && ( item.selected = !item.selected  )
                        return {...item}
                    }) 
                )
            })
        }
    }

    const renderObj = { ...state, ...functions }

    return (
        <>
           { type === 'wide'    && <WideCalendar data={renderObj}></WideCalendar> }
           { type === 'input'   && <InputCalendar data={renderObj}></InputCalendar> }
        </>
    )
}

export default React.memo(CalendarWarpper);
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './component/calendar'

const getDate = (date) => {
    alert(`==>  ${date}`)
}

ReactDOM.render(
    <>
        <Calendar date="20200101" getValue={getDate}></Calendar>
        <Calendar date="20200203" getValue={getDate}></Calendar>
        <Calendar date="20200303" getValue={getDate}></Calendar>
        <Calendar date="20200403" getValue={getDate}></Calendar>
    </>
    
    
    , document.getElementById('root'));

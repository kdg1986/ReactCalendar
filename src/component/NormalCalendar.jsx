import React, { useState } from 'react';
import {getLastDate} from '../js/common';

const NormalCalendar = props => {
    
    const getValue = (item) => {
        typeof props.getValue === 'function' &&  props.getValue(item.fullDate);
        console.log(item)
    }
    

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>일</td>
                        <td>월</td>
                        <td>화</td>
                        <td>수</td>
                        <td>목</td>
                        <td>금</td>
                        <td>토</td>                    
                    </tr>                
                    {props.list.map( (item,idx)=>{ 
                        return( <tr key={idx}>{item.map((item,idx) => <td style={{ color : item.color }} key={idx} onClick={ () => getValue(item)}>{item ? item.date : ''}</td> )}</tr> ) 
                    })} 
                </tbody>
            </table>
        </>
    )
}

export default React.memo(NormalCalendar);
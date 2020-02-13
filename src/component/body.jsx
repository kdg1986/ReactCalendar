import React, { useState } from 'react';
import {getLastDate} from '../js/common';

const addDateList = prp => {
    const firstDay = new Date( `${prp.year}/${prp.month}/01` ).getDay();    
    const lastDay = getLastDate(prp.date);    

    return  Array(firstDay).fill(null).concat( Array(lastDay).fill(null).map( 
                (item,idx) => {
                    return { 
                        fullDate : `${prp.year}${prp.month}${ idx+1 >= 10 ? idx+1 : '0'+(idx+1) }`
                        ,date : `${ idx+1 >= 10 ? idx+1 : '0'+(idx+1) }`
                    }
                }
            )
        )    
    
}

const CalendarBody = props => {
    
    //console.log( addDateList(props) )
    const [ obj , set ] = useState(addDateList(props));
    
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
                </tbody>
            </table>            
        </>
    )
}

export default React.memo(CalendarBody);
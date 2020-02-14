import React, { useState } from 'react';
import {getLastDate} from '../js/common';

const NormalCalendar = props => {
    
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
            { 
                props.list.map( (item,idx)=>{                      
                    return ( <div key={idx}>{item ? item.fullDate : 'X'}</div> )
                }) 
            }
        </>
    )
}

export default React.memo(NormalCalendar);
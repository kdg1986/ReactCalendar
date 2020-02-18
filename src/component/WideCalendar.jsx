import React from 'react';
import '../css/common.css';

const WideCalendar = props => {
    props = { ...props.data }
    const href = '#';
    const selectDate = (item) => {
        props.selectDate(item);
        typeof props.getValue === 'function' &&  props.getValue(item.fullDate);
    }
    
    return (
        <>
                <a href={href} onClick={ ()=> props.prevMonth() }>&lt;</a>&nbsp;&nbsp; {props.year} / {props.month} &nbsp;&nbsp;<a href={href} onClick={ ()=> props.nextMonth() }>&gt;</a>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>일</th>
                            <th>월</th>
                            <th>화</th>
                            <th>수</th>
                            <th>목</th>
                            <th>금</th>
                            <th>토</th> 
                        </tr>                
                        {props.dateList.map( (item,idx)=>{ 
                            return( 
                            <tr key={idx}>
                            {
                                item.map(
                                    (item,idx) => 
                                        <td className={'cellProperty '+item.color+' '+(item.selected ? 'today' : '') } key={idx} onClick={ () => selectDate(item)}>
                                            <div>{item ? item.date : ''}</div>
                                        </td> 
                                )
                            }                        
                            </tr> 
                            ) 
                        })} 
                    </tbody>
                </table>
            
        </>
    )
}

export default React.memo(WideCalendar);
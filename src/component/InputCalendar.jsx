import React from 'react';

const InputCalendar = props => {
    props = { ...props.data }
    const href = '#';
    const getValue = (item) => {
        typeof props.getValue === 'function' &&  props.getValue(item.fullDate);
        console.log(item)
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
                                        <td className={'cellProperty today '+item.color} key={idx} onClick={ () => getValue(item)}>
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

export default React.memo(InputCalendar);
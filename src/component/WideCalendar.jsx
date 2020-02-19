import React from 'react';
import '../css/common.css';
import nextImg from '../img/nextArrow.png';
import prevImg from '../img/prevArrow.png';
import { render } from '@testing-library/react';

const WideCalendar = props => {
    props = { ...props.data }
    
    const selectDate = (item) => {
        props.selectDate(item);
        typeof props.getValue === 'function' &&  props.getValue(item.fullDate);
    }

    const drag = (date) => {        
        props.dargDate(date)
    }

    const imgSize = {
        width : '22px'
        ,height: '22px'
    }
    return (
        <>
                <div style={{ paddingLeft :  '42%' , fontSize : 30 }}>
                    <button style={{ outline : 0, border : 0 }} type="button" onClick={ ()=> props.prevMonth() }>
                        <img src={prevImg} style={imgSize}></img>
                    </button>
                    &nbsp;&nbsp; {props.year} / {props.month} &nbsp;&nbsp;
                    <button style={{ outline : 0, border : 0 }} type="button" onClick={ ()=> props.nextMonth() }>
                        <img src={nextImg} style={imgSize}></img>
                    </button>
                </div>
                

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
                                        <td className={'cellProperty '+item.color+' '+(item.selected ? 'today' : '') } key={idx} 
                                        draggable={props.drag}
                                        onDragLeave={()=> props.drag && drag(item)}
                                        onClick={ () => selectDate(item)}
                                        
                                        >
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
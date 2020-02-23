import React from 'react';
import '../css/common.css';
import nextImg from '../img/nextArrow.png';
import prevImg from '../img/prevArrow.png';
import Popup from './Popup';


const WideCalendar = ({data}) => {
    const props = data;
    
    const selectDate = (item) => {
        props.selectDate(item);
        //typeof props.getValue === 'function' &&  props.getValue(item.fullDate);
    }
    const drag = (date) => {        
        props.dragDate(date)
    }
    const close = (selectData) => {
        props.closePopup(selectData);
    }
    return (
        <>
                <div style={{ textAlign : 'center', fontSize : '30px' }}>                    
                    <button className="prevImg"  type="button" onClick={ ()=> props.prevMonth() }></button>
                    &nbsp;&nbsp; {props.year} / {props.month} &nbsp;&nbsp;
                    <button className="nextImg"  type="button" onClick={ ()=> props.nextMonth() }></button>
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
                                        <td className={'cellProperty '+item.color+' '+(item.selected ? 'today' : '') } 
                                            key={idx} 
                                            draggable={props.drag}
                                            onDragLeave={()=> props.drag && drag(item)}
                                            onClick={ () => selectDate(item)}                                        
                                        >
                                            <p>{item ? item.date : ''}</p>                                            
                                        </td> 
                                )
                            }                        
                            </tr> 
                            ) 
                        })} 
                    </tbody>
                </table> 
                { props.isOpen && <Popup close={close} data={props.selectData}></Popup> }
        </>
    )
}




export default React.memo(WideCalendar);
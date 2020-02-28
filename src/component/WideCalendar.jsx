import React from 'react';
import '../css/common.css';
import Popup from './Popup';

const WideCalendar = ({data}) => {
    const props = data;
    
    const selectDate = (item) => {
        props.selectDate(item);
        //typeof props.getValue === 'function' &&  props.getValue(item.fullDate);
    }
    const drag = (date) => props.dragDate(date)
    const close = (selectData) => props.closePopup(selectData);
    const save = (selectData) => props.saveSchdule(selectData);

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
                                        >
                                            <p>{item.isSchedule === false && <button onClick={ () => selectDate(item)}>일정등록</button>}&nbsp;{item ? item.date : ''}</p>
                                            <span>{item.isSchedule === true && <a onClick={ () => selectDate(item)}>{item.content}</a>}</span>
                                        </td> 
                                )
                            }                        
                            </tr> 
                            ) 
                        })} 
                    </tbody>
                </table> 
                { props.isOpen && <Popup close={close} data={props.selectData} save={(obj)=> save(obj) }></Popup> }
        </>
    )
}




export default React.memo(WideCalendar);
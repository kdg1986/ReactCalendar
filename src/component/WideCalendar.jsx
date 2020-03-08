import React from 'react';
import '../css/common.css';
import Popup from './Popup';
import * as storeFunc from '../modules';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

const WideCalendar = ({data}) => {    
    const state      = { ...data.calendar }        
    const { prev, next, save, selectDate, close } = bindActionCreators({ 
            prev : storeFunc.prev 
            ,next : storeFunc.next
            ,save : storeFunc.saveSchdule
            ,selectDate : storeFunc.selectDate
            ,close : storeFunc.closePopup
    }, useDispatch() );

    //const save       = (selectData) => dispatch( storeFunc.saveSchdule(selectData) );
    //const close      = (selectData) => dispatch( storeFunc.closePopup(selectData) );
    //const prev       = () => dispatch( storeFunc.prev() );
    //const next      = () => dispatch( storeFunc.next() );
    //const selectDate = date => dispatch( storeFunc.selectDate(date) );    
    return (
        <>
                <div style={{ textAlign : 'center', fontSize : '30px' }}>                    
                    <button className="prevImg"  type="button" onClick={prev}></button>
                    &nbsp;&nbsp; {state.year} / {state.month} &nbsp;&nbsp;
                    <button className="nextImg"  type="button" onClick={next}></button>
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
                        {state.dateList.map( (item,idx)=>{ 
                            return( 
                            <tr key={idx}>
                            {
                                item.map(
                                    (item,idx) => 
                                        <td className={'cellProperty '+item.color+' '+(item.selected ? 'today' : '') } 
                                            key={idx} 
                                            draggable={state.drag}
                                            //onDragLeave={()=> state.drag && drag(item)}                                            
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
                { state.isOpen && <Popup close={close} data={state.selectData} save={(obj)=> save(obj) }></Popup> }
               
        </>
    )
}




export default React.memo(WideCalendar);
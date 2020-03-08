import React from 'react';
import WideCalendar from './WideCalendar';
import InputCalendar from './InputCalendar';
import { connect } from 'react-redux';
const CalendarWarpper = (props) => {            
    return (
        <>
           { props.calendar.type === 'wide'    && <WideCalendar data={props}></WideCalendar> }
           { props.calendar.type === 'input'   && <InputCalendar data={props}></InputCalendar> }           
           {/* <Popup ref={(ref) =>  popupHandler = ref }></Popup>  */}
           {/* <button onClick={ () => console.log( functions ) }>테스트</button> */}
        </>
    )
}
export default connect(
    state => ({ calendar : state })
    //,dispatch => ({dispatch})
    /* ({
        prev            : () => dispatch(storeFunc.prev())
        ,next           : () => dispatch(storeFunc.next())
        ,selectDate     : date => dispatch(storeFunc.selectDate(date))
        ,closePopup     : date => dispatch(storeFunc.closePopup(date))
        ,saveSchdule    : date => dispatch(storeFunc.saveSchdule(date))
    }) */
)( React.memo(CalendarWarpper) );
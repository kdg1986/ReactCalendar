import React from 'react';
import WideCalendar from './WideCalendar';
import InputCalendar from './InputCalendar';
import {selectMonDateList} from '../js/common';

const CalendarWarpper = props => {
    /* 달력을 형태별로 가져올때를 대비한 중간 컴포넌트 */
    const { type } = props.initObj;
    props.initObj.dateList = selectMonDateList(props.initObj);

    return (
        <>
           { type === 'wide'    && <WideCalendar data={props.initObj}></WideCalendar> }
           { type === 'input'   && <InputCalendar data={props.initObj}></InputCalendar> }
           
        </>
    )
}

export default React.memo(CalendarWarpper);
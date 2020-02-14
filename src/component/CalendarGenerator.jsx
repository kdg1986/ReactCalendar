import React from 'react';
import NormalCalendar from './NormalCalendar'
import {genDateList} from '../js/common';

const CalendarGenerator = props => {
    /* 달력을 형태별로 가져올때를 대비한 중간 컴포넌트 */    
    return (
        <>
           <NormalCalendar list={genDateList(props)}  getValue={props.getValue} ></NormalCalendar>
        </>
    )
}

export default React.memo(CalendarGenerator);
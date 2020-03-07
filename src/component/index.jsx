import React from 'react';
import {dateToString} from '../js/common';
import CalendarWarpper from './CalendarWarpper';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../modules';
import {selectMonDateList} from '../js/common';

const Calendar = props => {

    const arrPrpDate =  /^(\d{4})[.|-|/]*(\d{2})[.|-|/]*(\d{2})$/.exec( dateToString(props.date) );        
    const store = createStore( rootReducer, {
        ...props
        ,date        : arrPrpDate[0]
        ,year       : arrPrpDate[1]
        ,month      : arrPrpDate[2]
        ,day        : arrPrpDate[3]
        ,dateList   : selectMonDateList(arrPrpDate[0])
        ,defaultDaySelect : props.daySelect || false
        ,type : props.type || 'input'
        ,drag : props.drag || false
        ,isOpen : false        
    } );
    
    return(        
       <Provider store={store}>
            <CalendarWarpper />
       </Provider>
    )
}

export default Calendar;
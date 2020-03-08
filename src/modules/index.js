import {selectMonDateList,lpad} from '../js/common';

const PREV = 'calendar/PREV';
const NEXT = 'calendar/NEXT';
const SELECT_DATE = 'calendar/SELECT_DATE';
const CLOSE_POPUP = 'calendar/CLOSE_POPUP';
const SAVE_SCHEDULE = 'calendar/SAVE_SCHEDULE';
const DRAG_DATE = 'calendar/DRAG_DATE';

export const prev           = () => ({ type : PREV });
export const next           = () => ({ type : NEXT });
export const selectDate     = date => ({ type : SELECT_DATE, date });
export const closePopup     = date => ({ type : CLOSE_POPUP, date });
export const saveSchdule    = date => ({ type : SAVE_SCHEDULE, date });
export const dragDate       = date => ({ type : DRAG_DATE, date });
export default ( state = {}, action ) =>{
    switch (action.type) {
            case PREV : 
                const strYear  = lpad( (state.month-1) * 1 === 0 ? state.year-1 : state.year );
                const strMonth = lpad( (state.month-1) * 1 === 0 ? 12 : (state.month-1) );        
                return{
                    ...state
                    ,date       : `${strYear}${strMonth}01`
                    ,year       : strYear
                    ,month      : strMonth
                    ,day        : "01"
                    ,dateList   : selectMonDateList(`${strYear}${strMonth}01`)
                }
            case NEXT :
                const date  =   new Date( state.year , state.month , 1 );
                const yyyy  =   date.getFullYear();
                const mon   =   lpad( date.getMonth()+1 );
                const day   =   lpad( date.getDate() );                                 
                return {
                    ...state
                    ,date       : `${yyyy}${mon}${day}`
                    ,year       : yyyy
                    ,month      : mon
                    ,day        : day
                    ,dateList   : selectMonDateList(`${yyyy}${mon}${day}`)
                };
            case SELECT_DATE :                    
                return {
                    ...state
                    ,isOpen     : true
                    ,selectData : action.date
                }
            case CLOSE_POPUP :
                return {
                    ...state
                    ,selectData : ''
                    ,isOpen     : false
                } 
            case  SAVE_SCHEDULE :
                return {
                    ...state
                    ,selectData : ''
                    ,isOpen     : false
                    ,dateList   : state.dateList.map( item =>
                        item.map(item => { 
                            item.fullDate === action.date.fullDate && ( item.isSchedule = true  ) && ( item.content = action.date.content  )          
                            return {...item}
                        }) 
                    )
                }
            case DRAG_DATE :
                return{
                    ...state                
                    ,dateList   : state.dateList.map( item =>
                        item.map(item => { 
                            item.fullDate === action.date.fullDate && ( item.selected = !item.selected  )
                            return {...item}
                        }) 
                    )
                }
            default : return state; 
        }
}





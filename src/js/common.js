
const dateWrapper = (str) => {
    const strArr = /^(\d{4})[.|-|/]*(\d{1,2})[.|-|/]*(\d{2})$/.exec(str);
    return new Date( strArr[1], strArr[2], strArr[3] );
}

export const lpad = (str) =>  /^[0-9]$/.exec(str) ? String(str).replace( /^([0-9])$/, `0$1` ) : String(str);


export const getLastDate = (str) => {    
    const date = dateWrapper(str);
    date.setDate(0);
    return date.getDate();
}

export const dateToString = (str) => {    
    const regExp = /^(\d{4})[.|-|/]*(\d{2})[.|-|/]*(\d{2})$/.exec(str);
    const date = regExp ? new Date( regExp[1],regExp[2],regExp[3] ) : new Date();
    const mon =  lpad( date.getMonth() );
    const day =  lpad( date.getDate() );
    return `${date.getFullYear()}${mon}${day}`
}

export const selectMonDateList = prop => {
    const pDate = new Date( `${prop.year}/${prop.month}/01` ).getDay();
    const firstDay = pDate ===  0 ? 7 : pDate;
    const lastDate = getLastDate(prop.date);
    const colorSet = { 0 : "red", 6 : 'blue' }
    const listCount = 42;

    const prvYear  = (prop.month-1) * 1 === 0 ? prop.year-1 : prop.year;
    const prvMonth = lpad( (prop.month-1) * 1 === 0 ? 12 : (prop.month-1) );
    const prvMonStDt = new Date(  prvYear, prvMonth ,'0' ).getDate()-( firstDay );
    
    const nextBaseDate  =   new Date( prop.year , prop.month , 1 );        
    const nextYear      =   nextBaseDate.getFullYear();
    const nextMonth     =   lpad( nextBaseDate.getMonth()+1 );

    const obj =
        Array(firstDay).fill(null).map( (item,idx) => {
            const day = prvMonStDt + (idx+1);
            //const thisDay = new Date( `${prvYear}/${prvMonth}/${day}` ).getDay();
            return{
                fullDate : `${prvYear}${prvMonth}${day}`
                ,date : `${prvMonStDt + (idx+1)}`
                //,day : thisDay
                ,color : 'grey'

            }
        }).concat( 
            Array(lastDate).fill(null).map( 
                (item,idx) => {
                    const day = lpad( idx+1 );
                    const thisDay = new Date( `${prop.year}/${prop.month}/${day}` ).getDay();
                    return { 
                        fullDate : `${prop.year}${prop.month}${day}`
                        ,date : `${day}`
                        ,day : thisDay
                        ,color : colorSet[thisDay] || 'black'
                    }
                }
            )
        ).concat(
            Array(listCount-lastDate).fill(null).map(
                (item,idx) => {
                    const day = lpad( idx+1 );
                    return { 
                        fullDate : `${nextYear}${nextMonth}${day}`
                        ,date : `${day}`
                        ,color : 'grey'
                    }
                }
            )
        ) 
        
    return Array(6).fill(null).reduce( (acc,cur,idx,arr) =>{return acc.concat( [obj.splice(0,7)] )},[]);
}



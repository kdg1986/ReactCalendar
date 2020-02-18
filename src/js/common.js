
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

export const selectMonDateList = str => {
    
    const regExp    = /^(\d{4})[.|-|/]*(\d{2})[.|-|/]*(\d{2})$/.exec(str);
    const yyyy      =   regExp[1];
    const mm        =   regExp[2];
    const dd        =   regExp[3];
    const pDate = new Date( `${yyyy}/${mm}/01` ).getDay();

    const firstDay = pDate ===  0 ? 7 : pDate;
    const lastDate = getLastDate(`${yyyy}${mm}${dd}`);
    const colorSet = { 0 : "red", 6 : 'blue' }
    const listCount = 42;

    const prvYear  = (mm-1) * 1 === 0 ? yyyy-1 : yyyy;
    const prvMonth = lpad( (mm-1) * 1 === 0 ? 12 : (mm-1) );
    const prvMonStDt = new Date(  prvYear, prvMonth ,'0' ).getDate()-( firstDay );
    
    const nextBaseDate  =   new Date( yyyy , mm , 1 );        
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
                ,color : 'gray'

            }
        }).concat( 
            Array(lastDate).fill(null).map( 
                (item,idx) => {
                    const day = lpad( idx+1 );
                    const thisDay = new Date( `${yyyy}/${mm}/${day}` ).getDay();
                    return { 
                        fullDate : `${yyyy}${mm}${day}`
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
                        ,color : 'gray'
                    }
                }
            )
        ) 
        
    return Array(6).fill(null).reduce( (acc,cur,idx,arr) =>{return acc.concat( [obj.splice(0,7)] )},[]);
}



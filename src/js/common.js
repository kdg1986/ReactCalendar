
const dateWrapper = (str) => {
    const strArr = /^(\d{4})[.|-|/]*(\d{1,2})[.|-|/]*(\d{2})$/.exec(str);
    return new Date( strArr[1], strArr[2], strArr[3] );
}

export const getLastDate = (str) => {    
    const date = dateWrapper(str);
    date.setDate(0);
    return date.getDate();
}

export const dateToString = (str) => {    
    const regExp = /^(\d{4})[.|-|/]*(\d{2})[.|-|/]*(\d{2})$/.exec(str);
    const date = regExp ? new Date( regExp[1],regExp[2],regExp[3] ) : new Date();
    const mon = (date.getMonth()) >= 10 ? (date.getMonth()) : "0"+(date.getMonth());
    const day = date.getDate() >= 10 ? date.getDate() : "0"+date.getDate();
    return `${date.getFullYear()}${mon}${day}`
}

export const genDateList = prop => {
    const firstDay = new Date( `${prop.year}/${prop.month}/01` ).getDay();
    const prvYear  = (prop.month-1) * 1 === 0 ? prop.year-1 : prop.year;
    const prvMonth = (prop.month-1) * 1 === 0 ? 12 : (prop.month-1)
    const prvMonStDt = new Date(  prvYear, prvMonth ,'0' ).getDate()-firstDay;
    const lastDate = getLastDate(prop.date);

    console.log( firstDay )

    const obj =
        Array(firstDay).fill(null).map( (item,idx) => {
            return{
                fullDate : `${prvYear}${prvMonth}${prvMonStDt + (idx+1)}`
                ,date : `${prvMonStDt + (idx+1)}`
                ,color : 'grey'

            }
        }).concat( 
            Array(lastDate).fill(null).map( 
                (item,idx) => {
                    return { 
                        fullDate : `${prop.year}${prop.month}${ idx+1 >= 10 ? idx+1 : '0'+(idx+1) }`
                        ,date : `${ idx+1 >= 10 ? idx+1 : '0'+(idx+1) }`
                    }
                }
            )
        )    
        
    return Array(6).fill(null).reduce( (acc,cur,idx,arr) =>{return acc.concat( [obj.splice(0,7)] )},[]);
}



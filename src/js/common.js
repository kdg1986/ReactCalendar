
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
    const mon = (date.getMonth()+1) >= 10 ? (date.getMonth()+1) : "0"+(date.getMonth()+1);
    const day = date.getDate() >= 10 ? date.getDate() : "0"+date.getDate();
    return `${date.getFullYear()}${mon}${day}`
}

export const genDateList = prp => {
    const firstDay = new Date( `${prp.year}/${prp.month}/01` ).getDay();    
    const lastDay = getLastDate(prp.date);        
    return  Array(firstDay).fill(null).concat( Array(lastDay).fill(null).map( 
                (item,idx) => {
                    return { 
                        fullDate : `${prp.year}${prp.month}${ idx+1 >= 10 ? idx+1 : '0'+(idx+1) }`
                        ,date : `${ idx+1 >= 10 ? idx+1 : '0'+(idx+1) }`
                    }
                }
            )
        )        
}


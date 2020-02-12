
const dateWrapper = (str) => {
    const strArr = /(\d{4})[.|-]*(\d{2})[.|-]*(\d{2})*/.exec(str);    
    return new Date( strArr[1], strArr[2], strArr[3] );
}

export const getLastDate = (str) => {    
    const date = dateWrapper(str);
    date.setDate(0);
    return date.getDate();
}

export const dateToString = (obj) => {    
    const date = obj || new Date();    
    const mon = (date.getMonth()+1) >= 10 ? (date.getMonth()+1) : "0"+(date.getMonth()+1);
    const day = date.getDate() >= 10 ? date.getDate() : "0"+date.getDate();
    return date.getFullYear()+""+mon+""+day
}



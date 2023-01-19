export function subtractFromDate(date, count, type){
    switch (type){
        case 'year': {
            date.setFullYear(date.getFullYear() - count)
        }
        case 'month': {
            date.setMonth(date.getMonth() - count);
        }
        case 'day': {
            date.setDate(date.getDate() - count)
        }
    }
   console.log(date)
    return date;
}
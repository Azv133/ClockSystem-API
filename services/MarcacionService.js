
const getActualDate = () => {
    const actualDate = new Date();

    const year = actualDate.getFullYear();
    const month = actualDate.getMonth() + 1;
    const day = actualDate.getDate();
    const hours = String(actualDate.getHours()).padStart(2, '0');
    const minutes = String(actualDate.getMinutes()).padStart(2, '0');
    const seconds = String(actualDate.getSeconds()).padStart(2, '0');
    const milliseconds = String(actualDate.getMilliseconds()).padStart(3, '0');

    const formatedDate = (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day + '-' + year;
    const formatedFullDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
    const formatedDate2 = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
    
    return {
        ddmmyyyy: formatedDate,
        yyyymmdd: formatedDate2,
        fullDate: formatedFullDate
    }
}

const getDate = (date) => {

    const actualDate = new Date(date);

    const year = actualDate.getFullYear();
    const month = actualDate.getMonth() + 1;
    const day = actualDate.getDate();

    const hours = String(actualDate.getUTCHours()).padStart(2, '0');
    const minutes = String(actualDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(actualDate.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(actualDate.getUTCMilliseconds()).padStart(3, '0');

    const formatedDate = (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day + '-' + year;
    const formatedFullDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
    const formatedDate2 = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;

    return {
        ddmmyyyy: formatedDate,
        yyyymmdd: formatedDate2,
        fullDate: formatedFullDate
    }
}

const getMarkingGroups = (markings) => {
    let markingGroup = [];
    let group = {
        fecha: null
    };
    let detail = [];
    markings.map( mark => {
        const date1 = new Date(group.fecha);
        const date2 = new Date(mark.fecha);
        if(date1.getDate() != date2.getDate()){
            if(group.fecha != null){
                markingGroup.push({...group, detail}) 
            }
            detail = [mark];
            group = {
                fecha: mark.fecha,
                inicio: mark.marcacion_entrada,
                fin: mark.marcacion_salida,
            };
        }else{
            group = {
                ...group, 
                fin: mark.marcacion_salida ? mark.marcacion_salida : mark.marcacion_entrada
            }
            detail.push(mark);
        }
    })

    if (group.fecha != null) {
        markingGroup.push({ ...group, detail });
    }

    return markingGroup;
}

module.exports = { getActualDate, getDate, getMarkingGroups }
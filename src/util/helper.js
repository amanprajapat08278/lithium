var dates = new Date()
function printDate(){
   return dates.getDate();
}
//new Date().get
function printMonth(){
    return dates.getMonth();
}

function getBatchInfo(){
    let w = 3;
    let d = dates.getDay();
    return `Lithium, W${w}D${d}, the topic for today is Nodejs module system`
}



module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;
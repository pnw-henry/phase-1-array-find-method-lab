//Takes in an array of objects containing a 'year' and a 'result'
//Uses the find() menthod to iterate through the array
//If condition set by callback function is met, returns the value for year
function superbowlWin(record){
    let win = record.find(superbowl);
    if (!win){
        return;
    }
    else
        return win.year;
}

//Takes in an array element and looks for the proterty result to equal 'W'
function superbowl(element){
    if (element.result === 'W'){
        return element;
    }
}
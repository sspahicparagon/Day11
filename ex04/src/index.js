// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray array

function myMonitorsFunction(arr) {
    var monitorsList = [];

    // Only change code below this line
    for(let i = 0; i < monitorsListArray.length; i++) {
        monitorsList.push([monitorsListArray[i], i+1]);
    }

    return monitorsList;
    // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray)); // Change this line

module.exports = myMonitorsFunction;
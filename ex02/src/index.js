var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemps = [];

    for(let i = 0; i < newTemps.length; i++) {
        let sum = 0
        for(let j = 0; j < newTemps[i].length; j++) {
            sum += newTemps[i][j];
        }
        averageDayTemps.push(sum / newTemps[i].length);
    }

    return averageDayTemps;
}

console.log(myArrayFunction(temps));

module.exports = myArrayFunction;
function myMutation(arr) {
    for(let i = 0; i < arr[1].length; i++) {
        if(!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
            console.log(arr[0].toLowerCase());
            console.log(arr[1][i].toLowerCase());
            return false;
        }
    }
    return true;
}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zywvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;
function myBouncer(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == "" || arr[i] == null || arr[i] == 0 || arr[i] == false || (isNaN(arr[i]) && typeof(arr[i]) != typeof("ate"))|| arr[i] == undefined) {
            console.log(arr[i]);
            arr.splice(i,1);
            i--;
            // arr = arr.concat(arr.splice(0, i), arr.splice(i+1));
            // console.log(arr);
        }
    }
    return arr;
}

console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBounder([null, NaN, 1, 2, undefined]));
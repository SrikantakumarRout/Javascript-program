//write a program in javascript to check if an array is sorted or not
//var arr=[10,20,30,40];
var arr=[10,40,50,60,30,40];
function isSorted(arr) {
    return arr.every((element,index) => {
        return index === 0 || element >= arr[index - 1];
    });
}
console.log(isSorted(arr)); // true
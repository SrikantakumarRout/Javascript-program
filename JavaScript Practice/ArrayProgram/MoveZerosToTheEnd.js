//write a program in javascript to move zeros to the end of the array
var arr=[10,0,20,0,30,40];
function moveZerosToTheEnd(arr) {
    return arr.filter(element => element !== 0)
        .concat(arr.filter(element => element === 0));
}
console.log(moveZerosToTheEnd(arr)); // [ 10, 20, 30, 40, 0, 0 ]

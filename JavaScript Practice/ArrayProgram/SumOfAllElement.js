//  write aprogram in javascript to find the sum of all elements of an array

var arr=[10,20,30,40];
function sumOfAllElement(arr) {
    return arr.reduce((a,b)=>a+b,0);
    }
console.log(sumOfAllElement(arr)); // 100
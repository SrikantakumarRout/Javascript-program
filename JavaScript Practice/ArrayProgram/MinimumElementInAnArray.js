//write a program in javascript to find the minimum element in an array
var arr=[10,50,60,30,40];
function minimumElement(arr) {
    return arr.reduce((acc,element) => {
        return Math.min(acc,element);
    });
}
console.log(minimumElement(arr)); // 10
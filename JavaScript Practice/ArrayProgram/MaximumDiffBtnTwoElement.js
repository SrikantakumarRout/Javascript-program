//write a program in javascript to find the maximum difference between two elements in an array
var arr=[10,20,30,40];
function maximumDiffBtnTwoElement(arr) {
    return Math.max(...arr) - Math.min(...arr);
}
console.log(maximumDiffBtnTwoElement(arr)); // 30

//write a program in javascript to count the occurances of an element in an array
var arr=[10,20,30,40,10,20,30,40];
function countOccuranceInAnArray(arr,element) {
    return arr.reduce((acc,ele) => {
        if (ele === element) {
            acc++;
        }
        return acc;
    },0);
}
console.log(countOccuranceInAnArray(arr,10)); // 2

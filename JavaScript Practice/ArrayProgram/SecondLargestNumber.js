//write a program in javascript to find the second largest number in an array
var arr=[10,50,60,30,40];
function secondLargestNumber(arr) {
    return arr.reduce((acc,element) => {
        if (element > acc[0]) {
            acc[1] = acc[0];
            acc[0] = element;
        } else if (element > acc[1] && element !== acc[0]) {
            acc[1] = element;
        }
        return acc;
    },[-Infinity,-Infinity])[1];
}
console.log(secondLargestNumber(arr)); // 50
//write a program in javascript to find the average of elements in an array
var arr=[10,20,30,40];
function averageElement(arr) {
    return arr.reduce((acc,element) => {
        return acc + element;
    })/arr.length;
}
console.log(averageElement(arr)); // 25 
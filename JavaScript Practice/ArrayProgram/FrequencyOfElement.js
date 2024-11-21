//write a program in javascript to find the frequency of an element in an array
var arr=[10,20,30,40,10,20,30,40];
function frequencyOfElement(arr) {
    return arr.reduce((acc,element) => {
        if (element in acc) {
            acc[element]++;
        } else {
            acc[element] = 1;
        }
        return acc;
    },{});
}
console.log(frequencyOfElement(arr)); // { '10': 2, '20': 2, '30': 2, '40': 2 }
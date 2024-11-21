//write a program in javascript to remove duplicates from an array
var arr=[10,20,30,40,10,20,30,40];
function removeDuplicates(arr) {
    return arr.filter((element,index) => {
        return arr.indexOf(element) === index;
    });
}
console.log(removeDuplicates(arr)); // [10,20,30,40]
//write  aprogram in javascript to remove a specific element from an array
var arr=[10,20,30,40];
function removeSpecificElement(arr,element) {
    return arr.filter((ele) => {
        return ele !== element;
    });
}
console.log(removeSpecificElement(arr,30)); // [10,20,40]
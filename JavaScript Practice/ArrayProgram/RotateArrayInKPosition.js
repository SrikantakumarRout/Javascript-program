//write aprogram in javascript to rotate an array in k position
var arr=[10,20,30,40,50,60,70,80,90];
var k=3;
function rotateArrayInKPosition(arr,k){
    for(var i=0;i<k;i++){
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotateArrayInKPosition(arr,k)); // [ 80, 90, 10, 20, 30, 40, 50, 60, 70 ]
//write a program in javascipt to Find the second Largest Element in an Array
const arr=[10,20,30,40,50,60,70,80,90,100];
function secondLargestElement(arr){
    let firstLargest=arr[0];
    let secondLargest=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>firstLargest){
            secondLargest=firstLargest;
            firstLargest=arr[i];
        }else if(arr[i]>secondLargest){
            secondLargest=arr[i];
        }
    }
    return secondLargest;
}
console.log(secondLargestElement(arr)); // 90

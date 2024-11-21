//write a program in javascipt to Find the Largest Element in an Array
const arr=[10,20,30,40,50,60,70,80,90,100];
function largestElement(arr){
    let result=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>result){
            result=arr[i];
        }
    }
    return result;
}
console.log(largestElement(arr));

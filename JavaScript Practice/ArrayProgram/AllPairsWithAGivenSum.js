//write a program in javascript to find all pairs with a given sum
var arr=[10,20,30,40,50,60];
var sum=50;
function allPairsWithAGivenSum(arr,sum) {
    var pairs=[];
    for(var i=0;i<arr.length;i++) {
        for(var j=i+1;j<arr.length;j++) {
            if(arr[i]+arr[j] === sum) {
                pairs.push([arr[i],arr[j]]);
            }
        }
    }
    return pairs;
}
console.log(allPairsWithAGivenSum(arr,sum)); // [ [ 10, 40 ], [ 20, 30 ] ]
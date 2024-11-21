function Factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * Factorial(n-1);
    }
}
console.log(Factorial(5)); // Output: 120
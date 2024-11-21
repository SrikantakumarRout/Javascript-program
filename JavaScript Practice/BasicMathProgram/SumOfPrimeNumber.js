function SumOfPrimeNumber(n){
    let sum=0;
    for(let i=2;i<=n;i++){
        if(isPrime(i)){
            sum+=i;
        }
    }
    return sum;

}
console.log(SumOfPrimeNumber(30)); 


function isPrime(num){
    if(num<=1){
        return "Negative numbers and 0,1 are not prime numbers";
    }

    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
        else{
            return true;
        }
    }
}
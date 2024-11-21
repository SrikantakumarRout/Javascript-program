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
console.log(isPrime(1)); //true
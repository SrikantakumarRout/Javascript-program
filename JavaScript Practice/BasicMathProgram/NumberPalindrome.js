function NumberPalindrome(num){
    let str=num.toString();
    let reversed=str.split('').reverse().join('');

 if(str == reversed){
    return "it is a palindrome";
 }   else{
    return "it is not a palindrome";
 }
}
console.log(NumberPalindrome(123));
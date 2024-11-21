function pallindrome(str){
    return str === str.split('').reverse().join('');
}
console.log(pallindrome('level')); // true
console.log(pallindrome('skr'));  //false
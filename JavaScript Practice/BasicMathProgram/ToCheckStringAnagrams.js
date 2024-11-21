//write a program in javascript to Check if Two Strings are Anagrams
function checkStringAnagrams(str1,str2){
    let s1=str1.split("").sort().join("");
    let s2=str2.split("").sort().join("");
    return s1==s2;
}
console.log(checkStringAnagrams("apple","paple")); //true
console.log(checkStringAnagrams("listen","silent")); //true
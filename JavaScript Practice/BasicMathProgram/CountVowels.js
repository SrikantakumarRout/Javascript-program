function CountVowels(str){
   const vowels="aeiouAEIOU";
   let count=0;
   for(var char of str){
    if(vowels.includes(char)){
        count++;
    }
   }
   return count;
}
console.log(CountVowels("Hello world"));
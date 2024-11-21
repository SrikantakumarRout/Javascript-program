function longestWordInString(str){
    let words=str.split(" ");
    let longestWord="";
    for(var word of words){
        if(word.length>longestWord.length){
            longestWord=word;
        }
    }
    return longestWord;
} 
console.log(longestWordInString("Srikanta  is a good boy")); //Hello
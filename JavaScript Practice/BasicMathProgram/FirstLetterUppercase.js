//write a program in javascript to convert the first letter of each word of a string to uppercase
function firstLetterUppercase(str){
    let words=str.split(" ");
    let result="";
    for(var word of words){
        result+=word[0].toUpperCase()+word.slice(1)+" ";
    }
    return result;
}
console.log(firstLetterUppercase("srikanta kumar rout is a good boy"));
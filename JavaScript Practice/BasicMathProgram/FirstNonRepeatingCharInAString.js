//write a program in javascript to Find the First Non-Repeating Character in a String
function firstNonRepeatingCharInAString(str){
    let result="";
    for(var ch of str){
        if(str.indexOf(ch)==str.lastIndexOf(ch)){
            result+=ch;
            break;
        }
    }
    return result;
}
console.log(firstNonRepeatingCharInAString("ssttuvvwwex"));

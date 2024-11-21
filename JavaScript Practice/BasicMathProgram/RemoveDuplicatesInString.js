//write a program in javascript to remove duplicates in a string
function removeDuplicatesInString(str){
    let result="";
    for(var ch of str){
        if(result.indexOf(ch)==-1){
            result+=ch;
        }
    }
    return result;
}
console.log(removeDuplicatesInString("srikanta kumar rout is a good boy")); 
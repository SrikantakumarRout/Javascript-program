//write a program in javascript to Find the Longest Substring Without Repeating Characters
function longestSubstring(str){
    let result="";
    let temp="";
    for(var ch of str){
        if(temp.indexOf(ch)==-1){
            temp+=ch;
        }else{
            if(temp.length>result.length){
                result=temp;
            }
            temp="";
        }
    }
    return result;
}
console.log(longestSubstring("abdcabcbb")); 
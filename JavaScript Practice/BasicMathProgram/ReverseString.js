//Reverse a string in javascript without using inbuilt functions
function reverseString(str){
let reversed="";

for(var char of str){
    reversed=char+reversed;
}
return reversed;
}

 let string="Srikanta";
 let result=reverseString(string);
    console.log(result);
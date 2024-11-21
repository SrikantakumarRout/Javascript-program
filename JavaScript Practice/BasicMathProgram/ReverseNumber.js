
//write a program in javascript to reverse the number without using predefined function
function reverseNumber(str){
    let number=str.toString();
    let reversed="";
    
    for(var char of number){
        reversed=char+reversed;
    }
    return reversed;
    }
    
     let numbers=1234;
     let result=reverseNumber(numbers);
        console.log(result);






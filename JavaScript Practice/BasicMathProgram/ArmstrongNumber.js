//write a program in javascript to check whether a number is armstrong number or not.

// Armstrong number is a number that is equal to the sum of cubes of its digits.
// For example 0, 1, 153, 370, 371, 407 etc.
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = parseInt(temp / 10);
    }
    return sum === num;
}
// Test the function
let num = 153;
if (isArmstrong(num)) {
    console.log(`${num} is an Armstrong number.`);
}
else {
    console.log(`${num} is not an Armstrong number.`);
}
// Output: 153 is an Armstrong number.


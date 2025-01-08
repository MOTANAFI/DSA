const numbers = 1234;
const reverse = (num) => {
    const numToString = num.toString().split("");
    const reversedNum = [];
    for (let i = numToString.length - 1; i >= 0; i--) {
        reversedNum.push(numToString[i]);
    } 
    return parseInt(reversedNum.join(""));
    
}
console.log(reverse(numbers));  

//using the reverse method

const reverseNumber = (num) => {
    const numToString = num.toString().split("").reverse().join("");
    return parseInt(numToString);
    
}
console.log(reverseNumber(numbers));


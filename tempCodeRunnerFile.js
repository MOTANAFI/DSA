
function reverseString(str) {
    str = str.split('');
    let reversedString = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString.push(str[i]);
    }
    return reversedString.join('');
}
console.log(reverseString(string)); 


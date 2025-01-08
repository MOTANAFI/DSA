//  reversed string 

// function reverseString(str) {
//   return str.split('').reverse().join('');}


//   console.log(reverseString('hello'));  // olleh

// reversed string method 1

function reverseString(str){
    str.split('');
    let reversedString = [];
    for(let i = str.length -1; i >= 0; i--){
        reversedString.push(str[i])
    }
    return reversedString.join('');
}

console.log(reverseString('lakaaka'));  //  akaakal

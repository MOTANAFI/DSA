function reverseString(str){

    const stack = [];

    for(let char of str) {
        stack.push(char);

    }

    let revereString = "";

    while(stack.length > 0) {
        revereString += stack.pop()

    }

    return revereString

}

const reversedString = reverseString("hello")
console.log(reversedString)
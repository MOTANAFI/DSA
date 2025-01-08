// hello world = Hello World

// function sentenceCapitalization(str) {
//     const words = str.toLowerCase().split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);

//     }
//     return words.join(' ');

// }
// console.log(sentenceCapitalization('hello world'));  

// using for of loop

const sentenceCapitalization = str => {
    const words = str.toLowerCase().split(' ');
    capitalizedWords = [];
    for (let word of words) {
        capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
    }
    return capitalizedWords .join(' ');
}

console.log(sentenceCapitalization('hello world'));  // Hello World
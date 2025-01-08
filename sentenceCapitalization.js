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

const sentenceCapitalization = (str) => {
  // make the string to lowercase and split
  const words = str.toLowerCase().split(" ");
  // create an empty array to store the capitalized words
  capitalizedWords = [];
  // loop through the words array
  for (let word of words) {
    // capitalize the first letter of each word
    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  }
  // return the capitalized words array
  return capitalizedWords.join(" ");
};

console.log(sentenceCapitalization("hello world")); // Hello World

// usign map method 

const capitalize = (str) => {
    return str.toLowerCase().split(' ').map(word => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

console.log(capitalize('hello world')); // Hello World
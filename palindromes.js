// palindrome
// if the reverse string is the same as the original string,
// then it is a palindrome

const palindrome = (str) => {
  str.split("");
  let reversedString = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString.push(str[i]);
  }
  return reversedString.join("");
};

function isPalindrome(str) {
  const reversedString = palindrome(str);
  if (str === reversedString) {
    console.log(`${str} is a palindrome`);
  }
  if (str !== reversedString) {
    console.log(`${str} is not palindrome`);
  }
}

isPalindrome("abba");
isPalindrome("hello");

// the reverse method usage

function reverseString(str) {
  const reversedString = str.split("").reverse().join("");
  if (str === reversedString) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}

reverseString("cddc");
reverseString("hellow");